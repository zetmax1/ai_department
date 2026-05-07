import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

type NodeData = { pos: THREE.Vector3 };

function Network({ count = 70 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  // Manual elapsed time — avoids the deprecated THREE.Clock (r168+)
  const elapsed = useRef(0);

  const nodes: NodeData[] = useMemo(() => {
    const arr: NodeData[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 4
        ),
      });
    }
    return arr;
  }, [count]);

  const positions = useMemo(() => {
    const a = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      a[i * 3] = n.pos.x;
      a[i * 3 + 1] = n.pos.y;
      a[i * 3 + 2] = n.pos.z;
    });
    return a;
  }, [nodes]);

  const lineGeom = useMemo(() => {
    const verts: number[] = [];
    const colors: number[] = [];
    const maxDist = 1.5;
    const c1 = new THREE.Color("#3b82f6");
    const c2 = new THREE.Color("#10b981");
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].pos.distanceTo(nodes[j].pos);
        if (d < maxDist) {
          verts.push(nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z);
          verts.push(nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z);
          const t = d / maxDist;
          const col = c1.clone().lerp(c2, t);
          colors.push(col.r, col.g, col.b, col.r, col.g, col.b);
        }
      }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    geom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, [nodes]);

  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    };
    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      mouse.current.x = e.touches[0].clientX / window.innerWidth - 0.5;
      mouse.current.y = e.touches[0].clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    // Accumulate our own time so we never touch the deprecated THREE.Clock
    elapsed.current += delta;
    const t = elapsed.current;

    // gentle autonomous drift
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.05;

    // stronger mouse parallax
    const targetRotY = mouse.current.x * 0.9;
    const targetRotX = -mouse.current.y * 0.7;
    const targetPosX = mouse.current.x * 1.2;
    const targetPosY = -mouse.current.y * 0.8;

    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.06;
    groupRef.current.rotation.y += (targetRotY - (groupRef.current.rotation.y % (Math.PI * 2))) * 0.02;
    groupRef.current.position.x += (targetPosX - groupRef.current.position.x) * 0.06;
    groupRef.current.position.y += (targetPosY - groupRef.current.position.y) * 0.06;

    // subtle breathing scale
    const s = 1 + Math.sin(t * 0.6) * 0.03;
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color="#60a5fa" sizeAttenuation transparent opacity={0.95} />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeom}>
        <lineBasicMaterial vertexColors transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setEnabled(true);
  }, []);

  if (!enabled) return null;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div aria-hidden className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, isMobile ? 1.25 : 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <Network count={isMobile ? 45 : 80} />
      </Canvas>
    </div>
  );
}

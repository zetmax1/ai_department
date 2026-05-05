import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";

const NeuralNetCanvas = lazy(() => import("./NeuralNetCanvas"));

class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.error("NeuralNetCanvas failed:", error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function StaticFallback() {
  return <div aria-hidden className="absolute inset-0 bg-mesh" />;
}

export default function BackgroundScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      {mounted && (
        <CanvasErrorBoundary fallback={<StaticFallback />}>
          <Suspense fallback={null}>
            <NeuralNetCanvas />
          </Suspense>
        </CanvasErrorBoundary>
      )}
    </div>
  );
}

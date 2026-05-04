## Artificial Intelligence program — landing page

A modern, multilingual landing page for the new AI university program. Clean white base with blue and green accents, soft futuristic motion, and full Uzbek / English / Russian support.

### Languages
- Default: Uzbek. Switcher in the header for UZ / EN / RU.
- Instant switching, no reload. Choice persisted in local storage.
- All UI text lives in translation files; sentence case everywhere (no camel case in visible text).

### Page structure

1. **Header**
   - University-style wordmark on the left, anchor links (about, careers, facilities, apply), language switcher on the right.
   - Translucent on top, solid on scroll. Mobile: clean slide-down menu.

2. **Hero**
   - Full-viewport section with a soft Three.js neural-network animation in the background: floating nodes, glowing edges, slow drift, mouse parallax. Scaled down and frame-capped on mobile for performance; respects reduced-motion.
   - Title introducing the AI program, short subtitle, and two buttons: "learn more" (scrolls to the program section) and "apply" (opens application form).

3. **Why this program**
   - Short intro line plus a grid of small interactive cards: healthcare, finance, education, transport, science. Each card has an icon, a one-line use case, and a subtle hover lift with a green/blue gradient edge.
   - One short motivational line beneath the grid.

4. **Career paths**
   - Cards for AI engineer, data scientist, machine learning engineer, robotics engineer (and 1–2 more such as NLP engineer, computer vision engineer).
   - On hover/tap: card flips or expands to reveal a short description, typical tools, and an example task.

5. **Curriculum highlights**
   - Compact horizontal timeline / pill list of key subjects (math foundations, programming, machine learning, deep learning, computer vision, NLP, robotics, ethics). Hover reveals a one-line description.

6. **Facilities**
   - Responsive grid of cards for each room (AI lab, robotics lab, GPU cluster room, collaboration space). Click opens a lightbox with a larger image, description, and equipment list. Swipeable on mobile.

7. **Vision**
   - Quiet section with a soft animated gradient background. Two or three strong sentences about the future of AI and the role of students. Subtle fade-in on scroll.

8. **Testimonials**
   - Carousel of 3–4 short quotes from professors and industry partners with name, role, and avatar.

9. **Apply (admission CTA)**
   - Strong closing block with a built-in application form: full name, email, phone, preferred language of study, short message. Submits to Lovable Cloud and shows a success state. Basic validation and spam protection (honeypot field + rate limit).

10. **Footer**
    - Contacts, address, social links, language switcher repeated, copyright.

### Look and feel
- Palette: white background, deep blue as primary, fresh green as accent, soft neutral grays for text.
- Typography: clean modern sans-serif, generous spacing, large headings, comfortable line-height.
- Motion: smooth scroll, fade-and-rise on section enter, gentle hover micro-interactions, animated gradient blobs in the page background (very subtle), respects prefers-reduced-motion.
- Responsive: mobile-first layouts, touch-friendly cards, hero visual simplified on small screens.
- Accessibility: focus states, alt text, sufficient contrast, keyboard-navigable lightbox and carousel.

### Technical notes
- TanStack Start with separate routes only where needed; this is a single landing route with in-page sections.
- i18n via a lightweight context + JSON dictionaries for uz / en / ru, persisted in localStorage; no full reload on switch.
- Three.js (via `three` + `@react-three/fiber` + `@react-three/drei`) for the hero; lazy-loaded and gated by reduced-motion and viewport size.
- Lovable Cloud: `applications` table for form submissions with RLS allowing inserts only; admin read protected.
- Images: placeholder lab/room images included, easy to swap later.
- Reusable components: `SectionHeading`, `FeatureCard`, `CareerCard`, `FacilityCard`, `Lightbox`, `LangSwitcher`, `Carousel`.

### What I'll need from you later
- Final program name wording, exact admission details, real lab photos, and the destination for testimonials. Sensible placeholders will be used until then.
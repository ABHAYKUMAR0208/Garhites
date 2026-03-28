# Garhites Solution LLP - Multi-Page Website Redesign

A modern, multi-page React/Next.js website with 3D button effects, smooth animations, and an enhanced UX experience.

## 🌐 Pages

This is a **multi-page website** with the following routes:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero section, features, and CTA |
| `/about` | About Us | Company overview, values, and capabilities |
| `/services` | Services | All services with detailed feature lists |
| `/team` | Team | Team members with profiles and social links |
| `/contact` | Contact | Contact form and company information |

## 🎨 Features

### Modern UI Design
- Clean, professional aesthetic with purple-to-cyan gradient accents
- Glass morphism effects for navigation
- Responsive design for all screen sizes
- Dark mode ready

### 3D Button Effects
- Interactive 3D buttons with depth and shadow
- Smooth hover animations with lift effect
- Press/active states with realistic feedback
- Ripple effects on click
- Shine animation effects

### Animations & Interactions
- Floating elements in hero sections
- Smooth page transitions
- Card hover effects with 3D transforms
- Pulse glow animations
- Gradient background animations

### Responsive Navigation
- Sticky header with glass effect
- Active link highlighting
- Mobile hamburger menu
- Smooth scroll to sections

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📁 Project Structure

```
garhites-redesign/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Nav/Footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles & 3D effects
│   │   ├── about/
│   │   │   └── page.tsx        # About Us page
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── team/
│   │   │   └── page.tsx        # Team page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Navigation.tsx  # Shared navigation
│   │   │   ├── Footer.tsx      # Shared footer
│   │   │   └── index.ts
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Bun or npm

### Installation

1. Extract the ZIP file
2. Navigate to the project directory:
   ```bash
   cd garhites-redesign
   ```

3. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

4. Run the development server:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Colors
The color scheme uses CSS custom properties defined in `src/app/globals.css`. Modify:

```css
--primary: oklch(0.55 0.25 260);  /* Purple */
--accent: oklch(0.65 0.2 180);     /* Cyan */
```

### 3D Button Styles
Available button classes:
- `.btn-3d-primary` - Purple gradient button
- `.btn-3d-secondary` - Cyan gradient button  
- `.btn-3d-outline` - Outline style button

Add `.btn-3d`, `.ripple`, and `.shine` for effects.

### Adding New Pages
Create a new folder in `src/app/` with a `page.tsx` file:

```typescript
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}
```

Update navigation in `src/components/shared/Navigation.tsx`.

## 📦 Build for Production

```bash
bun run build
# or
npm run build
```

## 📄 Pages Content

### Home Page
- Hero section with animated background
- Stats (Projects, Clients, Years)
- Features grid
- CTA section

### About Page
- Company overview
- Core values
- Capabilities list
- Team highlights

### Services Page
- 6 service cards with detailed features:
  - Data Analysis
  - AWS Cloud Services
  - Server Hosting
  - IT Consulting
  - Web & App Development
  - Healthcare Solutions
- Process workflow
- Technologies section

### Team Page
- 7 team members with:
  - Profile initials/avatar
  - Role and bio
  - Social links overlay
- Join team section

### Contact Page
- Contact information card
- Contact form with validation
- Business hours
- Location placeholder

## 📜 License

This is a custom redesign project for Garhites Solution LLP.

---

**Built with modern web technologies for an enhanced user experience.**

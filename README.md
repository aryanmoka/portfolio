# Aryan Mahendra Mokashi - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing the work and achievements of Aryan Mahendra Mokashi, a Data Science & AI enthusiast.

## Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with deep blue and orange accent colors
- **Smooth Scrolling**: Seamless navigation between sections
- **Keyboard Accessible**: Full keyboard navigation support for accessibility
- **SEO Optimized**: Meta tags for search engines and social media sharing
- **Performance Optimized**: Fast loading times with Vite build tool

## Sections

1. **Header**: Fixed navigation bar with smooth scroll links
2. **Hero**: Eye-catching introduction with social links
3. **About**: Professional summary and contact information
4. **Skills**: Technical skills organized by category
5. **Education**: Academic background and qualifications
6. **Projects**: Showcase of key projects with live links
7. **Certificates**: Professional certifications with verification links
8. **Contact**: Contact information and social media links
9. **Footer**: Copyright and attribution

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful, consistent icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod
```

4. Follow the prompts:
   - Authorize Netlify CLI
   - Choose "Create & configure a new site"
   - Enter a site name (or leave blank for auto-generated)
   - Set publish directory to: `dist`

### Option 2: Deploy via Netlify UI

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder

### Option 3: Continuous Deployment from Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your Git provider
5. Select your repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

### Custom Domain (Optional)

After deployment, you can configure a custom domain:

1. Go to your site's settings in Netlify
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Follow the instructions to configure DNS

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Customization

### Colors

The color scheme uses deep blue and orange accents. To customize:

1. Update Tailwind classes in components (e.g., `bg-blue-900`, `text-orange-500`)
2. Or extend the Tailwind config in `tailwind.config.js`

### Content

To update content, edit the respective component files in `src/components/`:

- Personal info: `Hero.tsx`, `About.tsx`, `Contact.tsx`
- Skills: `Skills.tsx`
- Education: `Education.tsx`
- Projects: `Projects.tsx`
- Certificates: `Certificates.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contact

**Aryan Mahendra Mokashi**
- Email: aryanmokashi28@gmail.com
- LinkedIn: [aryanmokashi49](https://www.linkedin.com/in/aryanmokashi49/)
- GitHub: [aryanmoka](https://github.com/aryanmoka)

---

Built with React, TypeScript, and Tailwind CSS

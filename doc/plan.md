1. Scaffold Vite + React + TypeScript, install, run dev.
npm create vite@latest

Debug with lint: 
npm run lint and it flags bugs/bad patterns in  .ts/.tsx files.


2. Install Tailwind v4, add @tailwindcss/vite plugin, @import "tailwindcss".
npm install tailwindcss @tailwindcss/vite 

## Add config to vite.config.ts
import tailwindcss from '@tailwindcss/vite'

3. Set up routing (/, /projects).
npm install react-router-doom
import {BrowserRouter} from 'react-router-dom' in main.tsx 
then add 
 <BrowserRouter>
      <App />
</BrowserRouter>

Install lucide-react (provides all icons for free)
npm install lucide-react 

icons for github and linkedin 
npm install react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'


4. Create types.ts and projects.ts from the old JSON.
5. Build Header and Footer components.
6. Build ThemeProvider (context + localStorage + dark:) with anti-flash script.
7. Build Home page: Hero, About, Education, Contact.
8. Build Projects page: ProjectCard over the data.
9. Copy assets/ over.
10. Apply the design/styling.
11. Build and deploy to GitHub Pages.

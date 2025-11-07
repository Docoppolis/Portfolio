# 🌐 John Parrott – Portfolio Website

**🔗 Live Demo:** [https://johnparrott.com](https://johnparrott.com)

This is my personal portfolio site built with **React**, designed to showcase my projects, skills, and experience in a clean, scroll-based layout with smooth animations and interactive transitions. The site serves as both a resume and a demonstration of my frontend development skills, integrated with modern React practices and smooth scroll behavior powered by **Lenis**.

---

## 🚀 Features

- **Modern UI** – Built with Tailwind CSS for a responsive, dark-mode-friendly design.  
- **Smooth Scrolling** – Integrated Lenis scroll system for fluid navigation.  
- **Animated Experience Timeline** – Dynamic line animation that progresses as the user scrolls.  
- **Project Showcase** – Clickable project cards with images and GitHub links.  
- **Responsive Layout** – Adjusts seamlessly for mobile and desktop views.  
- **Social Integration** – Persistent social icons for GitHub, LinkedIn, and Instagram.  
- **Resume Download** – Direct access to a downloadable PDF resume.

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, Vite, Tailwind CSS |
| **Scrolling & Animation** | Lenis, Intersection Observer |
| **Icons** | react-social-icons |
| **Deployment** | GitHub Pages / Vercel (recommended) |

---

## 📂 File Overview

```
src/
├── assets/                  # Project thumbnails and skill icons
├── components/
│   ├── Hero.jsx             # Main intro, social icons, and section tabs
│   ├── About.jsx            # Personal introduction and background
│   ├── Experience.jsx       # Scroll-animated timeline of experience
│   ├── Skills.jsx           # Grid display of tools and technologies
│   ├── Projects.jsx         # Portfolio project showcase
│   ├── Navbar.jsx           # Navigation bar (for small screens)
│
├── App.jsx                  # Root layout, section organization, Lenis setup
├── main.jsx                 # Entry point for ReactDOM rendering
└── index.css                # Tailwind CSS base and global styles
```

---

## 🧠 Section Breakdown

### 💼 Hero
Displays your name, title, tagline, and resume download link, with interactive navigation tabs on large screens and fixed social icons for all devices.

### 👤 About
A short introduction detailing your education, backend development interests, and technical philosophy.

### 🧱 Experience
An animated vertical timeline with entries for key experiences, including software projects and university background.

### 🛠️ Skills
A responsive grid showcasing major tools and technologies, each highlighted with interactive hover effects.

### 📁 Projects
Displays your main projects, including:
- **PathOptimize** – Hospital equipment optimization app using data analysis.
- **Docoppolis Web Server** – Custom backend server built in C#.
- **Student Management System** – Full-stack educational management platform.
- **Portfolio Website** – The site you’re currently viewing.
- **Shinkenshi** – 2D Unreal Engine platformer.
- **Stock Data Viewer** – WinForms stock visualization app.

---

## ⚙️ Setup & Development

1. **Clone this repository**
   ```bash
   git clone https://github.com/Docoppolis/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎨 Customization

- Replace `/public/resume_JOHNPARROTT.pdf` with your own resume.
- Update project links and thumbnails in `Projects.jsx`.
- Adjust color scheme and hover effects in `index.css` or Tailwind config.

---

## 👋 About Me

I’m **John Parrott**, a Computer Science graduate from the **University of South Florida** focused on backend development and system design.  
I enjoy bridging backend logic with frontend interactivity to build efficient, data-driven systems that perform as elegantly as they look.

---

## 📬 Contact

- **GitHub:** [@Docoppolis](https://github.com/Docoppolis)  
- **LinkedIn:** [John Parrott](https://www.linkedin.com/in/john-parrott-6b88ba27a/)  
- **Instagram:** [@john.parrott653](https://www.instagram.com/john.parrott653)

---


---

## 🧾 Reuse & Attribution

I'm no front end dev so I'm not sure why anyone would want to but you are welcome to use this portfolio as a **template** for your own personal website!  
Please feel free to modify, redesign, or expand upon it to fit your style and needs.  
If you do, I kindly ask that you provide **credit** by linking back to this repository and website.

---
### 🖤 Acknowledgements

Special thanks to the open-source community for resources and inspiration used to build this portfolio.

---


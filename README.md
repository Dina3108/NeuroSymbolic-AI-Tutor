# NeuroSymbolic AI Framework for Interpretable STEM Tutoring Systems

A modern, interpretable AI-powered tutoring platform combining **Neural Networks** (pattern recognition) and **Symbolic Reasoning** (logical rules) to provide transparent, step-by-step STEM tutoring with real-time feedback, adaptive hints, and comprehensive learning analytics.

## ✨ Features

### 📱 Frontend Pages (8 Complete Pages)
- **Login Page** - Dual authentication for students & tutors
- **Student Dashboard** - Progress overview, topics, notifications
- **Tutor Dashboard** - Student monitoring & analytics
- **Learning Analytics** - Detailed performance charts & insights
- **Lesson/Concept Module** - Interactive lessons with MathJax support
- **Tutor Interaction Panel** - Real-time answer evaluation & feedback
- **Explanation & Reasoning** - NeuroSymbolic AI step-by-step logic
- **Settings & Help** - Theme switching, font size, support contact

### 🎯 Key Capabilities
```
✅ Responsive design (Mobile/Desktop)
✅ Consistent blue color palette (#4a90e2 theme)
✅ Accessibility (ARIA labels, keyboard navigation)
✅ Loading states & error handling
✅ Dark/Light theme toggle
✅ Interactive charts (Chart.js)
✅ Math rendering (MathJax)
✅ Hover animations & transitions
```

## 🛠 Technology Stack

```
Frontend: HTML5, CSS3, Vanilla JavaScript
Styling: CSS Custom Properties, Flexbox, CSS Grid
Charts: Chart.js
Math: MathJax
Backend: Node.js + Express (API-ready)
APIs: RESTful JSON endpoints
Deployment: Static hosting + Node.js server
```

## 📂 File Structure

```
nsai-stem-tutor/
├── 📁 frontend-pages/
│   ├── Login.html
│   ├── Student_Homepage.html
│   ├── Tutor_Dashboard.html
│   ├── Learning_Analytics.html
│   ├── Lesson_Module.html
│   ├── Tutor_Interaction.html
│   ├── Explanation_Reasoning.html
│   └── Settings_Help.html
├── 📁 backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
├── 📄 README.md (this file)
└── 🚀 demo/
    └── index.html
```

## 🎮 Quick Start (Standalone Demo)

1. **Download & Open** any HTML file directly in browser
2. **No server required** - All static versions work offline
3. **Full interactivity** - Hover effects, modals, forms, charts

## 🔧 Backend Setup (Optional - For Dynamic Data)

### Prerequisites
```bash
Node.js >= 14.0.0
npm
```

### Installation
```bash
cd backend
npm install express cors
node server.js
```

### Backend APIs Available
```
GET  /api/student/progress      → Progress metrics
GET  /api/student/topics         → Available lessons  
GET  /api/student/notifications  → User notifications
POST /api/evaluate              → Answer evaluation
POST /api/analyze               → Step-by-step reasoning
GET  /api/student/profile       → Learning analytics
```

**Frontend served via:**
```bash
npm install -g http-server
http-server . -p 8080
```

## 📱 Page Features Breakdown

| Page | Key Features | Integration Ready |
|------|-------------|------------------|
| **Login** | Tutor/Student buttons, smooth animations | ✅ API Ready |
| **Student Dashboard** | Progress cards, topic grid, notifications | ✅ Backend Connected |
| **Tutor Dashboard** | Student monitoring, analytics overview | ✅ Static Version |
| **Learning Analytics** | Charts, strengths/weaknesses, recommendations | ✅ Chart.js + API |
| **Lesson Module** | Quadratic solver, hints, feedback | ✅ MathJax + Backend |
| **Tutor Interaction** | Real-time feedback, history, reasoning path | ✅ Fully Interactive |
| **Explanation** | Neural + Symbolic reasoning visualization | ✅ API Connected |
| **Settings** | Theme toggle, font size, contact form | ✅ localStorage |

*Last Updated: December 2025*  
*Ready for Production Deployment* ✅

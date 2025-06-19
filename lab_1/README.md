# CPEN 208 Frontend Lab: Login & Signup Pages

This repository contains three different implementations of authentication interfaces using different technologies:

## 🎯 Project Overview

This lab demonstrates how to build login and signup pages using three different approaches:
1. **Pure HTML + CSS** (No frameworks)
2. **React** with TypeScript
3. **Next.js** with TypeScript and Tailwind CSS

## 📁 Project Structure

```
lab_1/
├── html-auth/           # Pure HTML + CSS implementation
│   ├── login.html
│   └── signup.html
├── react-auth/          # React implementation
│   ├── src/
│   │   └── App.tsx
│   └── package.json
├── next-auth-ui/        # Next.js implementation
│   ├── src/app/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### HTML + CSS Version
Simply open the HTML files in your browser:
- `html-auth/login.html`
- `html-auth/signup.html`

### React Version
```bash
cd react-auth
npm install          # Install dependencies first
npm start
```
Visit http://localhost:3000

### Next.js Version
```bash
cd next-auth-ui
npm install          # Install dependencies first
npm run dev
```
Visit http://localhost:3000/login or http://localhost:3000/signup

## ⚠️ Important Note
The `node_modules` folders are not included in this repository to keep the file size small. You must run `npm install` in both the `react-auth` and `next-auth-ui` directories before running the applications.

## 🛠️ Technologies Used

### HTML + CSS
- Pure HTML5
- CSS3 with Flexbox
- No external dependencies

### React
- React 18
- TypeScript
- Inline styles
- State management with hooks

### Next.js
- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- Client-side components

## ✨ Features

All implementations include:
- ✅ Username and password input fields
- ✅ Form validation
- ✅ Responsive design
- ✅ Navigation between login and signup
- ✅ Modern, clean UI
- ✅ Cross-browser compatibility

## 📸 Screenshots

### HTML + CSS Version
- Simple, clean interface
- Centered form layout
- Basic styling with CSS

### React Version
- Single-page application
- Toggle between login and signup modes
- State management demonstration

### Next.js Version
- Modern UI with Tailwind CSS
- Separate pages for login and signup
- Professional styling and animations

## 🎓 Learning Objectives

By completing this lab, you will understand:
- How to create forms with HTML and CSS
- React component structure and state management
- Next.js App Router and page-based routing
- TypeScript integration in React applications
- Modern CSS frameworks (Tailwind CSS)
- Responsive design principles

## 📝 Submission

This project is ready for submission with:
- Complete code for all three implementations
- Working development servers
- Professional documentation
- Clean project structure

## 🤝 Contributing

This is a lab assignment for CPEN 208. Feel free to use this as a reference for your own projects.

## 📄 License

This project is created for educational purposes as part of CPEN 208 Frontend Development course.

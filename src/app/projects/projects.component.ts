import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "Portfolio",
      description: "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, and more.",
      image: "assets/img/portfolio.webp",
      github: "https://github.com/Akshayp2002/personal-portfolio-angular",
      view: "https://devakshay.vercel.app",
      status: false,
      date: "augest - 2024",
      demo: false,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "figma",
          image: "assets/img/figma.svg",
        },
      ]
    },
    {
      name: "Hinez",
      description: "Unlock comprehensive efficiency and growth potential. Transform your operations today to boost workforce engagement and productivity",
      image: "assets/img/hinez.webp",
      github: false,
      view: "https://myhinez.com/",
      status: false,
      date: "may - 2024",
      demo: false,
      tech: [
        {
          name: "php",
          image: "assets/img/php.svg",
        },
        {
          name: "laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "splade",
          image: "assets/img/splade.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/mysql.svg",
        },
        {
          name: "bootstrap",
          image: "assets/img/bootstrap.svg",
        },
      ]
    },
    {
      name: "Quotes Generator",
      description: "Get inspired instantly with our Quote Generator app, using API Ninja. Click to receive a new, uplifting quote from a wide range of categories and let each day be filled with wisdom and motivation.",
      image: "assets/img/quotes.webp",
      github: "https://github.com/Akshayp2002/quote-generator",
      view: "https://quote-inspire.vercel.app",
      status: false,
      date: "augest - 2024",
      demo: true,
      tech: [
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "openapi",
          image: "assets/img/ninja.png",
        },
      ]
    },
    {
      name: "Instagram",
      description: "A clone of Instagram, the popular social media platform, allowing users to browse, post, and interact with content in a visually appealing and user-friendly environment.",
      image: "assets/img/instagram.webp",
      github: "https://github.com/Akshayp2002/instagram-angular",
      view: "https://devinstagram.vercel.app",
      status: true,
      date: "july - 2024",
      demo: true,
      tech: [
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "openapi",
          image: "assets/img/openai.svg",
        },
      ]
    },
    {
      name: "Netflix",
      description: "A Netflix clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
      image: "assets/img/netflix-cole.webp",
      github: "https://github.com/Akshayp2002/Akshayp2002",
      view: "https://netflix-clone-angular-chi.vercel.app",
      status: false,
      date: "June - 2024",
      demo: true,
      tech: [
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "swipper",
          image: "assets/img/swipper.svg",
        },
        {
          name: "tmdb",
          image: "assets/img/tmdb.svg",
        },
      ]
    },
    {
      name: "Swiftrevel",
      description: "Swiftrevel champions frictionless fintech, integrating flawlessly with your existing tools and software to eliminate data silos and streamline your workflow.",
      image: "assets/img/swiftrevel.webp",
      github: false,
      view: "https://swiftrevel.com",
      status: false,
      date: "may - 2024",
      demo: false,
      tech: [
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "nextjs",
          image: "assets/img/nextjs2.svg",
        },
        {
          name: "apidog",
          image: "assets/img/apidog-icon.svg",
        },
        {
          name: "mysql",
          image: "assets/img/mysql.svg",
        },
      ]
    },
    {
      name: "Invoice Generator",
      description: "A basic invoice generator application built with Laravel Breeze and styled with Tailwind CSS. This project offers minimal yet essential functionality for creating, viewing, and managing invoices",
      image: "assets/img/invoice.png",
      github: "https://github.com/Akshayp2002/InvoiceGenerator",
      view: false,
      status: false,
      date: "April - 2024",
      demo: true,
      tech: [
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "vite",
          image: "assets/img/vitejs.svg",
        },
        {
          name: "mysql",
          image: "assets/img/mysql.svg",
        },
      ]
    },
    {
      name: "Student 360",
      description: "A final year project: A student management portal designed to efficiently manage attendance, grades, student details, and other academic information.",
      image: "assets/img/student360.webp",
      github: "https://github.com/Akshayp2002/Student-360",
      view: false,
      status: false,
      date: "april - 2022",
      demo: false,
      tech: [
        {
          name: "nodejs",
          image: "assets/img/nodejs.svg",
        },
        {
          name: "bootstrap",
          image: "assets/img/bootstrap.svg",
        },
        {
          name: "mongodb",
          image: "assets/img/mongodb.svg",
        },  
        {
          name: "html",
          image: "assets/img/html5.svg",
        },
        {
          name: "javascript",
          image: "assets/img/js.svg",
        },
      ]
    },
  ]
}

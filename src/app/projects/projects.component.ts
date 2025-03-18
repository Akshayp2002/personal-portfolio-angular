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
      date: "Augest - 2024",
      demo: false,
      personal: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Figma",
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
      date: "May - 2024",
      demo: false,
      tech: [
        {
          name: "PHP",
          image: "assets/img/php.svg",
        },
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "Splade",
          image: "assets/img/splade.svg",
        },
        {
          name: "Mysql",
          image: "assets/img/mysql.svg",
        },
        {
          name: "Bootstrap",
          image: "assets/img/bootstrap.svg",
        },
      ]
    },
    {
      name: "Rugr",
      description: "Rugr play acrucial role in the modem financial ecosystem by facilitating between merchants and related stakeholders.",
      image: "assets/img/rugr.png",
      github: false,
      view: "https://rugr.com",
      status: false,
      date: "February - 2025",
      demo: false,
      tech: [
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "Mysql",
          image: "assets/img/mysql.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Nextjs",
          image: "assets/img/nextjs2.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
      ]
    },
    {
      name: "Home Lab System",
      description: "The Home Lab System is a self-hosted setup in my house, using an old computer to run private services with Docker and other software solutions.",
      image: "assets/img/homelabs.png",
      github: "https://github.com/Akshayp2002/homelab/tree/main",
      view: false,
      status: true,
      date: "January - 2025",
      demo: false,
      personal: true,
      tech: [
        {
          name: "Docker",
          image: "assets/img/docker.svg",
        },
        {
          name: "Jellyfin",
          image: "assets/img/jellyfin.svg",
        },
        {
          name: "Tailscale",
          image: "assets/img/tailscale.svg",
        },
        {
          name: "Immich",
          image: "assets/img/immich.svg",
        },
        {
          name: "Linux",
          image: "assets/img/linux.svg",
        },
      ]
    },
    {
      name: "Quotes Generator",
      description: "Get inspired instantly with our Quote Generator app, using API Ninja. Click to receive a new, uplifting quote from a wide range of categories and let each day be filled with wisdom and motivation.",
      image: "assets/img/quotes.webp",
      github: "https://github.com/Akshayp2002/quote-generator",
      view: "https://timspass.vercel.app/quotes",
      status: false,
      date: "Augest - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Apininja",
          image: "assets/img/ninja.png",
        },
      ]
    },
    {
      name: "QRCode Generate",
      description: "This tool is perfect for anyone needing a quick and reliable way to create QR codes for personal or professional use.",
      image: "assets/img/qrcode-page.webp",
      github: "https://github.com/Akshayp2002/quote-generator",
      view: "https://timspass.vercel.app/qrcode",
      status: false,
      date: "Augest - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Apininja",
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
      date: "July - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "ChatGPT",
          image: "assets/img/openai.svg",
        },
      ]
    },
    {
      name: "Netflix",
      description: "A Netflix clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
      image: "assets/img/netflix-cole.webp",
      github: "https://github.com/Akshayp2002/netflix-clone-angular",
      view: "https://demo-movie-app-gamma.vercel.app",
      status: false,
      date: "June - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Swipper",
          image: "assets/img/swipper.svg",
        },
        {
          name: "Tmdb",
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
      date: "May - 2024",
      demo: false,
      tech: [
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Nextjs",
          image: "assets/img/nextjs2.svg",
        },
        {
          name: "Apidog",
          image: "assets/img/apidog-icon.svg",
        },
        {
          name: "Mysql",
          image: "assets/img/mysql.svg",
        },
      ]
    },
    {
      name: "Farmers Copper",
      description: "Farmer’s Copper Ltd. extends its services throughout many industries. Provide the raw copper alloy materials in various standard shapes as well as custom cut copper alloys.",
      image: "assets/img/farmers-copper.png",
      github:false,
      view: false,
      status: false,
      date: "November - 2023",
      demo: false,
      tech: [
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
        {
          name: "Mysql",
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
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Vite",
          image: "assets/img/vitejs.svg",
        },
        {
          name: "Mysql",
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
      date: "April - 2022",
      demo: false,
      tech: [
        {
          name: "Nodejs",
          image: "assets/img/nodejs.svg",
        },
        {
          name: "Bootstrap",
          image: "assets/img/bootstrap.svg",
        },
        {
          name: "MongoDB",
          image: "assets/img/mongodb.svg",
        },  
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "Javascript",
          image: "assets/img/js.svg",
        },
      ]
    },
  ]
}

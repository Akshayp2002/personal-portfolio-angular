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
      description: "Unlock comprehensive efficiency and growth potential. Transform your operations today to boost workforce engagement and productivity",
      image: "assets/img/portfolio.webp",
      github: "https://github.com/Akshayp2002/Akshayp2002",
      view: "https://devakshay.vercel.app",
      status: false,
      date: "June - 2024",
      demo:false,
      tech: [
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "openai",
          image: "assets/img/openai.svg",
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
      date: "June - 2024",
      demo:false,
      tech: [
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "openai",
          image: "assets/img/openai.svg",
        },
      ]
    },
    {
      name: "Instagram",
      description: "It is a Clone of Instagram which is a socail media platform.",
      image: "assets/img/instagram.webp",
      github: "https://github.com/Akshayp2002/instagram-angular",
      view: "https://devinstagram.vercel.app",
      status: true,
      date: "June - 2024",
      demo:true,
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
          name: "openai",
          image: "assets/img/openai.svg",
        },
      ]
    },
    {
      name: "Netflix",
      description: "It is a Clone of Netflix which is a subscription-based streaming service that allows to watch TV shows and movies.",
      image: "assets/img/netflix-cole.webp",
      github: "https://github.com/Akshayp2002/Akshayp2002",
      view: "https://netflix-clone-angular-chi.vercel.app",
      status: false,
      date: "June - 2024",
      demo:true,
      tech: [
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "openai",
          image: "assets/img/openai.svg",
        },
        {
          name: "tmdb",
          image: "assets/img/tmdb.svg",
        },
      ]
    },
    {
      name: "Netflix",
      description: "It is a Clone of Netflix which is a subscription-based streaming service that allows to watch TV shows and movies.",
      image: "assets/img/netflix-cole.webp",
      github: "https://github.com/Akshayp2002/Akshayp2002",
      view: "https://devakshay.vercel.app",
      status: false,
      date: "June - 2024",
      demo:true,
      tech: [
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "openai",
          image: "assets/img/openai.svg",
        },
        {
          name: "tmdb",
          image: "assets/img/tmdb.svg",
        },
      ]
    },
  ]
}

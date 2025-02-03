import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutme: string = `I’m an enthusiastic Laravel developer with experience, 
                      keen to leverage my robust knowledge in Laravel and related technologies 
                      to significantly contribute to the company’s success while continuously 
                      expanding my expertise.I enjoy creating solutions from scratch, exploring 
                      how things work, and am driven by curiosity to solve complex challenges.`;

  work: Array<any> = [
    {
      company: "Cloudrevel Innovation",
      position: "Software Engineer",
      time_period: "March 2023 - Present",
      place: "Chennai Tamilnadu India",
      projects: [
        {
          name: "MyHinez",
          link: '#',
        },
        {
          name: "Starling Fintech",
          link: '#',
        },
        {
          name: "Swiftrevel",
          link: '#',
        },
      ],
      tech: [
        {
          name: "laravel",
          link: 'https://laravel.com/',
        },
        {
          name: "php",
          link: 'https://www.php.net/',
        },
        {
          name: "mysql",
          link: 'https://www.mysql.com/',
        },
        {
          name: "tailwind",
          link: 'https://tailwindcss.com/',
        },
        {
          name: "JavaScript",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: "Laravel-Spade",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: "Spatie-Permission",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
      ]
    },
    {
      company: "AOF Engineering Systems, LLC",
      position: "Junior developer",
      time_period: "Sep 2022 - Feb 2023",
      place: "Hyderabad Telangana India",
      projects: [
        {
          name: "Farmers Copper",
          link: '#',
        },
      ],
      tech: [
        {
          name: "laravel",
          link: 'https://laravel.com/',
        },
        {
          name: "php",
          link: 'https://www.php.net/',
        },
        {
          name: "mysql",
          link: 'https://www.mysql.com/',
        },
        {
          name: "HTML",
          link: 'https://tailwindcss.com/',
        },
        {
          name: "CSS",
          link: 'https://tailwindcss.com/',
        },
        {
          name: "JavaScript",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: "Github",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
      ]
    }]

  education: Array<any> = [
    {
      studied_at: "Manipal University Jaipur",
      qualified: "Bachelor of Computer Applications",
      time_period: "2024 - Present",
      place: "Online",
    },
    {
      studied_at: "NTTF Bangalore",
      qualified: "Computer Engineering &IT Infrastucture",
      time_period: "2019 - 2022",
      place: "Bangalore Karnataka India",
    },
    {
      studied_at: "GVHSS Sivapuram",
      qualified: "Plus Two Computer Science",
      time_period: "2017 - 2019",
      place: "Kozhikode Kerala",
    },
    {
      studied_at: "GHSS Balussery",
      qualified: "SSLC",
      time_period: "2016 - 2017",
      place: "Kozhikode Kerala",
    }
  ]
}

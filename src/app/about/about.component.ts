import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private dialog: MatDialog) { }

  openPopup(companyId: any): void {
    console.log(companyId);
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {

      width: '80%',
      maxWidth: '1200px',
      data: companyId
    });
  }




  // Array of data
  aboutme: string = `I’m an enthusiastic Laravel developer with experience, 
                      keen to leverage my robust knowledge in Laravel and related technologies 
                      to significantly contribute to the company’s success while continuously 
                      expanding my expertise.I enjoy creating solutions from scratch, exploring 
                      how things work, and am driven by curiosity to solve complex challenges.`;



  work: Array<any> = [
    {
      id: 1,
      company: "Cloudrevel Innovation",
      position: "Software Engineer",
      time_period: "March 2023 - Present",
      place: "Chennai Tamilnadu India",
      overview: 'A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.',
      my_role: `As a UI/UX Designer at PixelForge Studios, I was responsible for crafting intuitive and visually compelling user interfaces for a range of digital products. My work involved close collaboration with developers, artists, and clients to ensure that designs were both aesthetically pleasing and functionally effective.

I contributed to several high- profile projects, including designing the user interface for a mobile app that was featured in major app stores.I also worked on interactive websites and digital campaigns for prominent brands, ensuring a seamless user experience across all platforms.

PixelForge Studios encouraged a culture of innovation and teamwork.I regularly participated in brainstorming sessions, where we explored new design trends and experimented with emerging technologies.This collaborative approach allowed us to push the boundaries of what was possible in digital design.`,
      impact: '‍My experience at PixelForge Studios significantly shaped my design philosophy, emphasizing the importance of blending creativity with functionality. The projects I worked on not only expanded my skill set but also instilled a passion for creating designs that resonate with users on a deeper level.',
      projects: [
        {
          name: "MyHinez",
          link: '#',
          image: "assets/img/hinez.webp",
        },
        {
          name: "Swiftrevel",
          link: '#',
          image: "assets/img/swiftrevel.webp",
        },
        {
          name: "Rugr",
          link: '#',
          image: "assets/img/rugr.png",
        },
      ],
      tech: [
        {
          name: "laravel",
          link: 'https://laravel.com/',
          image: "assets/img/angular17.svg",
        },
        {
          name: "php",
          link: 'https://www.php.net/',
          image: "assets/img/angular17.svg",
        },
        {
          name: "mysql",
          link: 'https://www.mysql.com/',
          image: "assets/img/angular17.svg",
        },
        {
          name: "tailwind",
          link: 'https://tailwindcss.com/',
          image: "assets/img/angular17.svg",
        },
        {
          name: "JavaScript",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: "assets/img/angular17.svg",
        },
        {
          name: "Laravel-Spade",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: "assets/img/angular17.svg",
        },
        {
          name: "Spatie-Permission",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: "assets/img/angular17.svg",
        },
      ]
    },
    {
      id: 2,
      company: "AOF Engineering Systems, LLC",
      position: "Junior developer",
      time_period: "Sep 2022 - Feb 2023",
      place: "Hyderabad Telangana India",
      projects: [
        {
          name: "Farmers Copper",
          link: '#',
          image: "assets/img/farmers-copper.png",
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
    }
  ]

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

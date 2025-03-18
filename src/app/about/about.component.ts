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
      overview: 'A leading provider of tech solutions focusing on innovative software development.',
      my_role: `At Cloudrevel Innovations, I am actively involved in designing and implementing database structures to ensure efficient data management and system scalability. My primary focus is on backend development, where I build and maintain core application logic using Laravel and MySQL while implementing secure and scalable APIs for seamless data flow. I work closely with the frontend team to ensure smooth API integrations and improve application responsiveness. Additionally, I specialize in SSO authentication implementation, enhancing security and user authentication processes. Performance optimization is a key part of my role, where I continuously refine database queries, caching mechanisms, and server-side processes to improve overall application efficiency.`,
      impact: '‍My experience at Cloudrevel Innovations has strengthened my ability to architect, optimize, and implement backend solutions for complex enterprise applications. Being deeply involved in database design, API development, and performance tuning has allowed me to build robust and scalable systems that ensure both efficiency and long-term maintainability. Collaborating closely with the frontend team has refined my problem-solving skills and reinforced my passion for developing seamless, high-performing applications.',
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
          image: 'assets/img/laravel.svg'
        },
        {
          name: "php",
          link: 'https://www.php.net/',
          image: 'assets/img/php.svg'
        },
        {
          name: "Mysql",
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg'
        },
        {
          name: "tailwind",
          link: 'https://tailwindcss.com/',
          image: 'assets/img/tailwindcss.svg'
        },
        {
          name: "JavaScript",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: "assets/img/js.svg",
        },
        {
          name: "Laravel-Spade",
          link: 'https://splade.dev/',
          image: 'assets/img/splade.svg'
        },
        {
          name: "Spatie-Permission",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: "assets/img/spatie.svg",
        },
        {
          name: "Vite",
          link: 'https://vitejs.dev/',
          image: 'assets/img/vitejs.svg'
        },
        {
          name: "Bitbucket",
          link: 'https://bitbucket.org/',
          image: 'assets/img/bitbucket.svg'
        },
        {
          name: "Jira",
          link: 'https://www.atlassian.com/software/jira',
          image: 'assets/img/jira.svg'
        },
        {
          name: "ApiDog",
          link: 'https://apidog.com/',
          image: 'assets/img/apidog-icon.svg'
        },
        {
          name: "Linux",
          link: 'https://www.kernel.org/',
          image: 'assets/img/linux.svg'
        },
        {
          name: "Laravel Reverb",
          link: 'https://reverb.laravel.com/',
          image: 'assets/img/reverb.svg'
        },
        {
          name: "Laravel Pulse",
          link: 'https://pulse.laravel.com/',
          image: 'assets/img/pulse.svg'
        },
      ]
    },
    {
      id: 2,
      company: "AOF Engineering Systems, LLC",
      position: "Junior developer",
      time_period: "Sep 2022 - Feb 2023",
      place: "Hyderabad Telangana India",
      overview: "AOF Engineering Systems LLC is a technology-driven company specializing in software solutions for the metal and oil industries, focusing on enterprise applications, system reliability, and data management.",
      my_role:"As a Jr. Software Developer, I was introduced to Laravel, MySQL, and modern backend development. I worked on large-scale projects, handling database migrations, resolving production issues, and optimizing system performance. I also contributed to Farmers Copper, ensuring efficient operations and software maintenance.",
      impact:"My experience at AOF Engineering Systems provided a strong foundation in backend development and database management. I played a key role in improving system stability, optimizing performance, and ensuring smooth database transitions, helping the company maintain high-quality software solutions.",
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
          image: 'assets/img/laravel.svg'
        },
        {
          name: "php",
          link: 'https://www.php.net/',
          image: 'assets/img/php.svg'
        },
        {
          name: "Mysql",
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg'
        },
        {
          name: "HTML5",
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          image: 'assets/img/html5.svg'
        },
        {
          name: "CSS3",
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          image: 'assets/img/css3.svg'
        },
        {
          name: "JavaScript",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg'
        },
        {
          name: "jQuery",
          link: 'https://jquery.com/',
          image: 'assets/img/jquery.svg'
        },
        {
          name: "Visual Studio Code",
          link: 'https://code.visualstudio.com/',
          image: 'assets/img/vscode.svg'
        },
        {
          name: "Github",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/github.svg'
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

import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private dialog: MatDialog) { }

  openPopup(company: any): void {
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: company,
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
      company: 'iTrend Solution Pvt. Ltd.',
      position: 'Software Engineer',
      time_period: 'May 2025 - Present',
      place: 'Chennai, Tamil Nadu, India',
      overview:
        'iTrend Solution is a forward-thinking technology company streamlining e-commerce operations through advanced automation and data-driven solutions.',
      my_role:
        'I spearhead the development of an API-driven platform that integrates Amazon Ads, SP-API, and warehouse APIs to enable real-time inventory synchronization and pricing automation. Leveraging Supervisor-based queues and caching mechanisms, I optimize workflows to accelerate report generation and sales data processing. My role also involves designing AI-powered dashboards utilizing OpenAI and local LLMs (Ollama) to provide actionable sales insights and demand forecasting. Additionally, I manage the AWS EC2 infrastructure to ensure high availability and scalability of our services.',
      impact:
        'My contributions have significantly enhanced system performance and operational efficiency. By automating complex inventory and pricing tasks, I reduced manual workload and improved data accuracy. The implementation of AI-driven analytics has empowered stakeholders with predictive insights for better decision-making. Furthermore, my targeted optimizations in infrastructure management have ensured a robust, high-performance environment capable of handling large-scale data processing demands.',
      projects: [
        {
          name: 'Amazon SP Manager',
          link: '#',
          image: 'assets/img/itrend-sp.webp',
          gallery: [
            { image: 'assets/img/projects/itrend-login.webp', name: 'Login' },
            { image: 'assets/img/projects/i-project.png', name: 'Details' },
            {
              image: 'assets/img/projects/itrend-notifications.webp',
              name: 'Notifications',
            },
            { image: 'assets/img/projects/i-project-1.png', name: 'Reports' },
            { image: 'assets/img/projects/i-project-2.png', name: 'Inventory' },
            { image: 'assets/img/projects/i-project-3.png', name: 'Settings' },
          ],
        },
      ],
      tech: [
        {
          name: 'laravel',
          link: 'https://laravel.com/',
          image: 'assets/img/laravel.svg',
        },
        {
          name: 'php',
          link: 'https://www.php.net/',
          image: 'assets/img/php.svg',
        },
        {
          name: 'Mysql',
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg',
        },
        {
          name: 'HTML5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          image: 'assets/img/html5.svg',
        },
        {
          name: 'CSS3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          image: 'assets/img/css3.svg',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'jQuery',
          link: 'https://jquery.com/',
          image: 'assets/img/jquery.svg',
        },
        {
          name: 'Visual Studio Code',
          link: 'https://code.visualstudio.com/',
          image: 'assets/img/vscode.svg',
        },
        {
          name: 'Github',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/github.svg',
        },
      ],
    },
    {
      id: 2,
      company: 'Cloudrevel Innovations Pvt. Ltd.',
      position: 'Software Engineer',
      time_period: 'Mar 2023 - Apr 2025',
      place: 'Chennai, Tamil Nadu, India',
      overview:
        'Cloudrevel Innovations is a premier provider of enterprise-grade software solutions, specializing in scalable applications and digital transformation.',
      my_role:
        'I focused on developing robust HRMS and ERP applications using Laravel and MySQL, tailoring solutions for high performance and security. I architected and maintained enterprise modules featuring SSO and multi-monolithic structures to enhance system reliability. My responsibilities included delivering RESTful APIs and collaborating closely with design and frontend teams to ensure seamless integration and a consistent, intuitive user experience across multiple business applications.',
      impact:
        'I played a pivotal role in standardizing scalable architecture and improving system security through advanced authentication protocols. My work on optimizing API integrations and modularizing core components led to greater system stability and easier maintenance. These efforts directly contributed to delivering reliable, high-quality enterprise solutions that streamlined client operations and elevated user satisfaction.',
      projects: [
        {
          name: 'MyHinez',
          link: '#',
          image: 'assets/img/hinez.webp',
          gallery: [
            { image: 'assets/img/hinez.webp', name: 'HRMS' },
            { image: 'assets/img/projects/hrms-login.webp', name: 'HRMS' },
            { image: 'assets/img/projects/hrms-dashboard.webp', name: 'HRMS' },
            { image: 'assets/img/hrms-dash.webp', name: 'HRMS' },
            { image: 'assets/img/projects/hrms-leaves.webp', name: 'HRMS' },
            { image: 'assets/img/projects/hrms-superadmin.webp', name: 'HRMS' },
            { image: 'assets/img/projects/hrms-hierarchy.webp', name: 'HRMS' },
          ],
        },
        {
          name: 'Swiftrevel',
          link: '#',
          image: 'assets/img/swiftrevel.webp',
          gallery: [{ image: 'assets/img/swiftrevel.webp', name: 'Dashboard' }],
        },
        {
          name: 'Rugr',
          link: '#',
          image: 'assets/img/rugr.webp',
          gallery: [
            { image: 'assets/img/rugr.webp', name: 'Dashboard' },
            { image: 'assets/img/rugr-dash.webp', name: 'Dashboard' },
          ],
        },
      ],
      tech: [
        {
          name: 'laravel',
          link: 'https://laravel.com/',
          image: 'assets/img/laravel.svg',
        },
        {
          name: 'php',
          link: 'https://www.php.net/',
          image: 'assets/img/php.svg',
        },
        {
          name: 'Mysql',
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg',
        },
        {
          name: 'tailwind',
          link: 'https://tailwindcss.com/',
          image: 'assets/img/tailwindcss.svg',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'Laravel-Spade',
          link: 'https://splade.dev/',
          image: 'assets/img/splade.svg',
        },
        {
          name: 'Spatie-Permission',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/spatie.svg',
        },
        {
          name: 'Vite',
          link: 'https://vitejs.dev/',
          image: 'assets/img/vitejs.svg',
        },
        {
          name: 'Bitbucket',
          link: 'https://bitbucket.org/',
          image: 'assets/img/bitbucket.svg',
        },
        {
          name: 'Jira',
          link: 'https://www.atlassian.com/software/jira',
          image: 'assets/img/jira.svg',
        },
        {
          name: 'ApiDog',
          link: 'https://apidog.com/',
          image: 'assets/img/apidog-icon.svg',
        },
        {
          name: 'Linux',
          link: 'https://www.kernel.org/',
          image: 'assets/img/linux.svg',
        },
        {
          name: 'Laravel Reverb',
          link: 'https://reverb.laravel.com/',
          image: 'assets/img/reverb.svg',
        },
        {
          name: 'Laravel Pulse',
          link: 'https://pulse.laravel.com/',
          image: 'assets/img/pulse.svg',
        },
      ],
    },
    {
      id: 3,
      company: 'AOF Engineering Systems LLC',
      position: 'Jr. Software Developer',
      time_period: 'Sep 2022 - Mar 2023',
      place: 'Hyderabad, Telangana, India',
      overview:
        'AOF Engineering Systems LLC specializes in engineering-grade software solutions for the oil, gas, and metal industries, emphasizing reliability and compliance.',
      my_role:
        'I developed and maintained critical reporting tools and Fixed Equipment Reliability software using Laravel and MySQL. My work focused on improving data accuracy and ensuring compliance with industry standards. I also actively managed bug tracking and resolution across multiple projects, ensuring stable and reliable application performance.',
      impact:
        'My improvements to the reporting tools directly enhanced data visibility and decision-making capabilities for the client. By consistently resolving bugs and optimizing code, I ensured high application uptime and reliability. This experience solidified my foundation in building industry-compliant software and maintaining rigorous quality standards in a fast-paced environment.',
      projects: [
        {
          name: 'Farmers Copper',
          link: '#',
          image: 'assets/img/farmers-copper.webp',
          gallery: [
            { image: 'assets/img/farmers-copper.webp', name: 'Dashboard' },
          ],
        },
      ],
      tech: [
        {
          name: 'laravel',
          link: 'https://laravel.com/',
          image: 'assets/img/laravel.svg',
        },
        {
          name: 'php',
          link: 'https://www.php.net/',
          image: 'assets/img/php.svg',
        },
        {
          name: 'Mysql',
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg',
        },
        {
          name: 'HTML5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          image: 'assets/img/html5.svg',
        },
        {
          name: 'CSS3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          image: 'assets/img/css3.svg',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'jQuery',
          link: 'https://jquery.com/',
          image: 'assets/img/jquery.svg',
        },
        {
          name: 'Visual Studio Code',
          link: 'https://code.visualstudio.com/',
          image: 'assets/img/vscode.svg',
        },
        {
          name: 'Github',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/github.svg',
        },
      ],
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'Manipal University Jaipur',
      qualified: 'Bachelor of Computer Applications',
      time_period: '2024 - Present',
      place: 'Online',
    },
    {
      studied_at: 'NTTF Bangalore',
      qualified: 'Computer Engineering &IT Infrastucture',
      time_period: '2019 - 2022',
      place: 'Bangalore Karnataka India',
    },
    {
      studied_at: 'GVHSS Sivapuram',
      qualified: 'Plus Two Computer Science',
      time_period: '2017 - 2019',
      place: 'Kozhikode Kerala',
    },
    {
      studied_at: 'GHSS Balussery',
      qualified: 'SSLC',
      time_period: '2016 - 2017',
      place: 'Kozhikode Kerala',
    },
  ];
}

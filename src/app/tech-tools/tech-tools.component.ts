import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
                modern frameworks and
                languages to powerful platforms, my toolkit ensures high-quality and efficient development. 🚀 🌟`
  items: Array<any> = [
    {
      name: "Laravel",
      description: 'Laravel is a PHP framework designed for building web applications. It follows the MVC pattern and offers robust tools for modern web development.',
      link: 'https://laravel.com/',
      image: 'assets/img/laravel.svg'
    },
    {
      name: "PHP",
      description: 'PHP is a popular general-purpose scripting language that is especially suited for web development.',
      link: 'https://www.php.net/',
      image: 'assets/img/php.svg'
    },
    {
      name: "Angular",
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      link: 'https://angular.io',
      image: 'assets/img/angular17.svg'
    },
    {
      name: "Splade",
      description: 'Splade provides a super easy way to build Single Page Applications (SPA) using standard Laravel Blade templates, enhanced with renderless Vue 3 components. ',
      link: 'https://splade.dev/',
      image: 'assets/img/splade.svg'
    },
    {
      name: "Tailwind CSS",
      description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
      link: 'https://tailwindcss.com/',
      image: 'assets/img/tailwindcss.svg'
    },
    {
      name: "Bootstrap",
      description: 'Bootstrap is a popular open-source CSS framework for developing responsive and mobile-first websites.',
      link: 'https://getbootstrap.com/',
      image: 'assets/img/bootstrap.svg'
    },
    {
      name: "Flowbite",
      description: 'Flowbite is a popular UI component library designed for Tailwind CSS, providing a set of accessible and customizable components for building modern web applications.',
      link: 'https://flowbite.com/',
      image: 'assets/img/flowbite.svg'
    },
    {
      name: "HTML5",
      description: 'HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: 'assets/img/html5.svg'
    },
    {
      name: "CSS3",
      description: 'CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: 'assets/img/css3.svg'
    },
    {
      name: "JavaScript",
      description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: 'assets/img/js.svg'
    },
    {
      name: "jQuery",
      description: 'jQuery is a fast, small, and feature-rich JavaScript library that simplifies things like HTML document traversal and manipulation.',
      link: 'https://jquery.com/',
      image: 'assets/img/jquery.svg'
    },
    {
      name: "Vite",
      description: 'Vite is a modern build tool that provides a fast development environment and optimized builds.',
      link: 'https://vitejs.dev/',
      image: 'assets/img/vitejs.svg'
    },
    {
      name: "MySQL",
      description: 'MySQL is an open-source relational database management system based on SQL (Structured Query Language).',
      link: 'https://www.mysql.com/',
      image: 'assets/img/mysql.svg'
    },
    {
      name: "GitHub",
      description: 'GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.',
      link: 'https://github.com/',
      image: 'assets/img/github.svg'
    },
    {
      name: "Bitbucket",
      description: 'Bitbucket is a Git-based source code repository hosting service owned by Atlassian.',
      link: 'https://bitbucket.org/',
      image: 'assets/img/bitbucket.svg'
    },
    {
      name: "Jira",
      description: 'Jira is a tool developed by Atlassian used for issue tracking and project management.',
      link: 'https://www.atlassian.com/software/jira',
      image: 'assets/img/jira.svg'
    },
    {
      name: "Figma",
      description: 'Figma is a powerful, collaborative design tool for teams. Explore ideas and gather feedback, build realistic prototypes, and streamline product development with design systems.',
      link: 'https://www.figma.com',
      image: 'assets/img/figma.svg'
    },
    {
      name: "Postman",
      description: 'Postman is a powerful tool for API development, testing, and monitoring, used by developers to streamline their workflow.',
      link: 'https://www.postman.com/',
      image: 'assets/img/postman.svg'
    },
    {
      name: "ApiDog",
      description: 'ApiDog offers tools and services for testing and monitoring APIs to ensure their functionality and performance.',
      link: 'https://apidog.com/',
      image: 'assets/img/apidog-icon.svg'
    },
    {
      name: "AWS",
      description: 'Amazon Web Services (AWS) offers a comprehensive suite of cloud services for computing, storage, and networking.',
      link: 'https://aws.amazon.com/',
      image: 'assets/img/aws.svg'
    },
    {
      name: "Linux",
      description: 'Linux is a free and open-source operating system kernel used in many distributions for servers, desktops, and embedded systems.',
      link: 'https://www.kernel.org/',
      image: 'assets/img/linux.svg'
    },
    {
      name: "Visual Studio Code",
      description: 'Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/',
      image: 'assets/img/vscode.svg'
    },
    {
      name: "OpenAI",
      description: 'OpenAI is an AI research lab that aims to ensure that artificial general intelligence benefits all of humanity.',
      link: 'https://www.openai.com/',
      image: 'assets/img/openai.svg'
    },
    {
      name: "Atlassian",
      description: 'Atlassian provides software products for project management, software development, and team collaboration.',
      link: 'https://www.atlassian.com/',
      image: 'assets/img/atlassian.svg'
    },
    {
      name: "Spatie",
      description: 'Spatie is a web development company that provides a wide range of open-source packages for Laravel and other PHP projects.',
      link: 'https://spatie.be/',
      image: 'assets/img/spatie.svg'
    }, 
    {
      name: "Vercel",
      description: 'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web',
      link: 'https://vercel.com',
      image: 'assets/img/vercel-icon-dark.svg'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/img/typescript.svg'
    },
    {
      name: "Swiper",
      description: 'Swiper is the most modern free and open source mobile touch slider with hardware accelerated transitions and amazing native behavior.',
      link: 'https://swiperjs.com/',
      image: 'assets/img/swipper.svg'
    },
    {
      name: "API-Ninjas",
      description: 'API Ninjas is a data company that enables you to build real applications using real data. API Ninjas maintains 78 APIs',
      link: 'https://api-ninjas.com/',
      image: 'assets/img/ninja.png'
    },
  ];
}

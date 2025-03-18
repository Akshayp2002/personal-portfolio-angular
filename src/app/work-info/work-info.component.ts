import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-work-info',
  standalone: true,
  imports: [],
  templateUrl: './work-info.component.html',
  styleUrl: './work-info.component.css'
})
export class WorkInfoComponent {
  details: any;

  // Demo array for companies (use this in place of a backend service or static data)
  work = [
    {
      id: 1,
      name: 'Cloudrevel Innovation.',
      address: '123 Tech Lane, Silicon Valley, CA',
      from_date: 'March 2023',
      to_date: 'Present',
      overview: 'A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.',
      role: 'Software Engineer',
      my_role: `As a UI/UX Designer at PixelForge Studios, I was responsible for crafting intuitive and visually compelling user interfaces for a range of digital products. My work involved close collaboration with developers, artists, and clients to ensure that designs were both aesthetically pleasing and functionally effective.

I contributed to several high- profile projects, including designing the user interface for a mobile app that was featured in major app stores.I also worked on interactive websites and digital campaigns for prominent brands, ensuring a seamless user experience across all platforms.

PixelForge Studios encouraged a culture of innovation and teamwork.I regularly participated in brainstorming sessions, where we explored new design trends and experimented with emerging technologies.This collaborative approach allowed us to push the boundaries of what was possible in digital design.`,
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
      skillsAcquired: [
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
      ],
      impact: '‍My experience at PixelForge Studios significantly shaped my design philosophy, emphasizing the importance of blending creativity with functionality. The projects I worked on not only expanded my skill set but also instilled a passion for creating designs that resonate with users on a deeper level.'
    },
    {
      id: 2,
      name: 'AOF Engineering System',
      address: '123 Tech Lane, Silicon Valley, CA',
      from_date: 'March 2023',
      to_date: 'Present',
      overview: 'A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.A leading provider of tech solutions focusing on innovative software development.',
      role: 'Software Engineer',
      my_role: `As a UI/UX Designer at PixelForge Studios, I was responsible for crafting intuitive and visually compelling user interfaces for a range of digital products. My work involved close collaboration with developers, artists, and clients to ensure that designs were both aesthetically pleasing and functionally effective.

I contributed to several high- profile projects, including designing the user interface for a mobile app that was featured in major app stores.I also worked on interactive websites and digital campaigns for prominent brands, ensuring a seamless user experience across all platforms.

PixelForge Studios encouraged a culture of innovation and teamwork.I regularly participated in brainstorming sessions, where we explored new design trends and experimented with emerging technologies.This collaborative approach allowed us to push the boundaries of what was possible in digital design.`,
      projects: [
        {
          name: "Farmers Copper",
          link: '#',
          image: "assets/img/farmers-copper.png",
        },
      ],
      skillsAcquired: [
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
      ],
      impact: '‍My experience at PixelForge Studios significantly shaped my design philosophy, emphasizing the importance of blending creativity with functionality. The projects I worked on not only expanded my skill set but also instilled a passion for creating designs that resonate with users on a deeper level.'
    },
    // More demo companies can be added here...
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public companyId: number,  // Receive companyId as data
    private dialogRef: MatDialogRef<WorkInfoComponent>   // Inject MatDialogRef to close the dialog
  ) {
    // Find the company based on the passed companyId
    this.details = companyId;
  }

  onClose(): void {

    this.dialogRef.close(); // Closes the dialog
  }
}

import { ProjectsComponent } from './projects/projects.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TechToolsComponent } from './tech-tools/tech-tools.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'tools',
        component: TechToolsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'blogs',
        component: BlogsComponent
    }
];

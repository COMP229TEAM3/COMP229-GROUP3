import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IncidentListComponent } from './incident-list/incident-list.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
        path: 'incidents',
        component: IncidentListComponent,
        title: 'Incident List'
    },
];

export default routeConfig;
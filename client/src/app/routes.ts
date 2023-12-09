import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';

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
        path: 'incident',
        component: IncidentListComponent,
        title: 'Incident List'
    },

    {
        path: 'incident/add',
        component: IncidentAddComponent,
        title: 'Add Incident'
    }
];

export default routeConfig;
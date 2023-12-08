import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

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
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    }
];

export default routeConfig;
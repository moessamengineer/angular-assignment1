import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'about',pathMatch:'full'
    },
    {
        path: 'portfolio',component:PortofolioComponent
    },
    {
        path: 'contact',component:ContactComponent
    }, 
     {
        path: 'about',component:AboutComponent
    },
    {
        path: '**',component:NotfoundComponent
    }
];

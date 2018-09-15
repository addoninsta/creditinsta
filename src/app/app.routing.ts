import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home';

const routes: Routes = [
    { path: '', component: HomeComponent }

]

export const routingConfiguration = RouterModule.forRoot(routes, { useHash: true });
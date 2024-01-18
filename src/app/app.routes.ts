import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './nav/menu/menu.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
        { path: '', component: AppComponent },
        // { path: '',   redirectTo: '/nav', pathMatch: 'full' },
        { path: 'nav', component: NavComponent},
        {path:'menu',component:MenuComponent},    
        // { path: '**', component: PageNotFoundComponent },
];
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {HomeComponent} from './home/home.component';

const appRoutes:Routes = [
{path:'home', component:HomeComponent},
{path:'not-found', component:NotfoundComponent},
{path:'', redirectTo:'/home', pathMatch:'full'},
{path:'**', redirectTo:'/not-found'}
];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)]
})
export class AppRouter{}

import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { DishdetailsComponent } from '../dishdetails/dishdetails.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Component } from '@angular/core';

export const routes : Routes = [
    { path : 'home' , component : HomeComponent},
    { path : 'menu' , component : MenuComponent},
    { path : 'contactus' , component : ContactComponent},
    { path: 'dishdetail/:id',     component: DishdetailsComponent },
    { path : '' , redirectTo : '/home' , pathMatch : 'full'},
    { path : 'aboutus' , component : AboutComponent}
];
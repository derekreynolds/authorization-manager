import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'app/user/login/login.component';
import { UserComponent, AddUserComponent, ShowUserComponent, EditUserComponent } from 'app/user';
import { SecurityGroupComponent, AddSecurityGroupComponent, ShowSecurityGroupComponent, EditSecurityGroupComponent } from 'app/security-group';


export const routes: Routes = [
  	{
    	path: '',
    	component: LoginComponent
  	},
    {
      	path: 'users',
      	component: UserComponent
    }, 
    {
    	path: 'users/add',
      	component: AddUserComponent
    }, 
    {
    	path: 'users/show/:id',
      	component: ShowUserComponent
    }, 
    {
    	path: 'users/edit/:id',
      	component: EditUserComponent
    },
    {
      	path: 'security-groups',
      	component: SecurityGroupComponent
    }, 
    {
    	path: 'security-groups/add',
      	component: AddSecurityGroupComponent
    }, 
    {
    	path: 'security-groups/show/:id',
      	component: ShowSecurityGroupComponent
    }, 
    {
    	path: 'security-groups/edit/:id',
      	component: EditSecurityGroupComponent
    }
];
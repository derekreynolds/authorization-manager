import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule }    from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { routes } from './app-routing.module';
import { MaterialModule } from './material.module';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { ToolbarComponent, ToolbarService } from 'app/common/ui/toolbar';
import { ToolbarSetupService } from 'app/common/util';
import { ClickableIndicatorDirective } from './common/ui/util/clickable-indicator.directive';
import { UserComponent, AddUserComponent, ShowUserComponent, EditUserComponent } from 'app/user';
import { SecurityGroupComponent, AddSecurityGroupComponent, ShowSecurityGroupComponent, EditSecurityGroupComponent } from 'app/security-group';
import { ClickableRowDirective } from './common/ui/util/clickable-row.directive';
import { DeleteDialogComponent } from './common/ui/dialog/delete/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	  ToolbarComponent,
	  ClickableIndicatorDirective,
	  UserComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent,
    ClickableRowDirective,
    DeleteDialogComponent,
    SecurityGroupComponent,
    AddSecurityGroupComponent,
    ShowSecurityGroupComponent,
    EditSecurityGroupComponent 
  ],
  imports: [
  	BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [RestClientFactoryService, RestService, ToolbarService, ToolbarSetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

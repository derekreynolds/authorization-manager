import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { User } from 'app/common/model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private userForm;

  private restService: RestService<User>;

  public user = new User();

  constructor(private router: Router, private formBuilder: FormBuilder, private restClientFactoryService: RestClientFactoryService) { 
  	this.restService = restClientFactoryService.get(new User);
  }

  ngOnInit() {
  	this.userForm = this.formBuilder.group ({
    	username: [ this.user.username, [Validators.required, Validators.email] ],
    	firstName: [ this.user.firstName, Validators.required ],
    	lastName: [ this.user.lastName, Validators.required ]
  	});
  }

  onClickSave() {
  	this.user.username = this.userForm.controls['username'].value;
  	this.user.firstName = this.userForm.controls['firstName'].value;
  	this.user.lastName = this.userForm.controls['lastName'].value;
  	
  	this.restService.post(this.user).subscribe(res => {});
  	this.router.navigate(['users']);
  }

  onClickCancel() {
  	this.router.navigate(['users']);
  }

}

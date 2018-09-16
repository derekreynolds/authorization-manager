import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { User } from 'app/common/model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  private userForm;
 
  private restService: RestService<User>;

  user: User;

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private restClientFactoryService: RestClientFactoryService) {
  	this.setUpForm();
  	this.restService = restClientFactoryService.get(new User());
  }


  ngOnInit() {
  	this.route.params.subscribe(params => {
		let id = params['id']; 

		this.restService.get(id).subscribe(user => {   

			this.user = user;

			this.userForm.controls['username'].setValue(this.user.username);
			this.userForm.controls['username'].valueChanges.subscribe(value => this.user.username = value);
  			this.userForm.controls['firstName'].setValue(this.user.firstName);
  			this.userForm.controls['firstName'].valueChanges.subscribe(value => this.user.firstName = value);
  			this.userForm.controls['lastName'].setValue(this.user.lastName);
  			this.userForm.controls['lastName'].valueChanges.subscribe(value => this.user.lastName = value);
		});
	});
  }

  onClickSave() {  	
  	this.restService.put(this.user.id, this.user).subscribe(res => {});
  	this.router.navigate(['users']);
  }

  onClickCancel() {
  	this.router.navigate(['users']);
  }

  private setUpForm() {
  	this.userForm = this.formBuilder.group ({
    	username: [ '', [Validators.required, Validators.email] ],
    	firstName: [ '', Validators.required ],
    	lastName: [ '', Validators.required ],
    	enabled: [true],
    	locked: [false]
  	});
  }

}

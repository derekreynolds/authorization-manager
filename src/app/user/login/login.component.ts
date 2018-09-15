import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group ({
    	email: ['', Validators.required, Validators.email ],
    	password: ['', Validators.required ]
  	});
  }


  onClickLogin() {
  	this.router.navigate(['users']);
  }
}

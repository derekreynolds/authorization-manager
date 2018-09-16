import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { SecurityGroup } from 'app/common/model';


@Component({
  selector: 'er-add-security-group',
  templateUrl: './add-security-group.component.html',
  styleUrls: ['./add-security-group.component.scss']
})
export class AddSecurityGroupComponent implements OnInit {

  private securityGroupForm;

  private restService: RestService<SecurityGroup>;

  public securityGroup = new SecurityGroup();

  constructor(private router: Router, private formBuilder: FormBuilder, private restClientFactoryService: RestClientFactoryService) { 
  	this.restService = restClientFactoryService.get(new SecurityGroup);
  }

  ngOnInit() {
  	this.securityGroupForm = this.formBuilder.group ({
      name: [ this.securityGroup.name, [Validators.required] ],
  	});
  }

  onClickSave() {
    this.securityGroup.name = this.securityGroupForm.controls['name'].value;
  	this.restService.post(this.securityGroup).subscribe(res => {});
  	this.router.navigate(['security-groups']);
  }

  onClickCancel() {
  	this.router.navigate(['security-groups']);
  }

}
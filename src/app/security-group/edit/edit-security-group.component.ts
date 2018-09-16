import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { SecurityGroup  } from 'app/common/model';

@Component({
  selector: 'er-edit-security-group',
  templateUrl: './edit-security-group.component.html',
  styleUrls: ['./edit-security-group.component.scss']
})
export class EditSecurityGroupComponent implements OnInit {

  private securityGroupForm;
 
  private restService: RestService<SecurityGroup>;

  securityGroup: SecurityGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private restClientFactoryService: RestClientFactoryService) {
    this.setUpForm();
    this.restService = restClientFactoryService.get(new SecurityGroup());
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
    let id = params['id']; 

    this.restService.get(id).subscribe(securityGroup => {   

      this.securityGroup = securityGroup;

      this.securityGroupForm.controls['name'].setValue(this.securityGroup.name);
      this.securityGroupForm.controls['name'].valueChanges.subscribe(value => this.securityGroup.name = value);

    });
  });
  }

  onClickSave() {    
    this.restService.put(this.securityGroup.id, this.securityGroup).subscribe(res => {});
    this.router.navigate(['security-groups']);
  }

  onClickCancel() {
    this.router.navigate(['security-groups']);
  }

  private setUpForm() {
    this.securityGroupForm = this.formBuilder.group ({
      name: [ '', [Validators.required,] ]
    });
  }

}

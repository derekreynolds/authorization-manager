import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { SecurityGroup } from 'app/common/model';
import { DeleteDialogComponent } from 'app/common/ui/dialog';


@Component({
  selector: 'er-show-security-group',
  templateUrl: './show-security-group.component.html',
  styleUrls: ['./show-security-group.component.scss']
})
export class ShowSecurityGroupComponent implements OnInit {

  private restService: RestService<SecurityGroup>;

  securityGroup: SecurityGroup;

  constructor(private router: Router, private route: ActivatedRoute, private restClientFactoryService: RestClientFactoryService, public dialog: MatDialog) {
    this.restService = restClientFactoryService.get(new SecurityGroup())
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']; 

      this.restService.get(id).subscribe(securityGroup => {             
        this.securityGroup = securityGroup;
      });
    });
  }

  onClickCancel() {
    this.router.navigate(['security-groups']);
  }

  onClickEdit() {
    this.router.navigate(['security-groups/edit', this.securityGroup.id]);
  }

  onClickDelete() {
  const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result.answer == 'Y') {
        this.restService.delete(this.securityGroup.id).subscribe(res => {
          this.router.navigate(['security-groups']);
        });        
      }
     
    });

    
  }

}

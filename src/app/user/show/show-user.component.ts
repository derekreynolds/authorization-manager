import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { User } from 'app/common/model';
import { DeleteDialogComponent } from 'app/common/ui/dialog';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

	private restService: RestService<User>;

	user: User;

  constructor(private router: Router, private route: ActivatedRoute, private restClientFactoryService: RestClientFactoryService, public dialog: MatDialog) {
  	this.restService = restClientFactoryService.get(new User())
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
		let id = params['id']; 

		this.restService.get(id).subscribe(user => {       			
			this.user = user;
		});
	});
  }

  onClickCancel() {
  	this.router.navigate(['users']);
  }

  onClickEdit() {
  	this.router.navigate(['users/edit', this.user.id]);
  }

  onClickDelete() {
	const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
    	
      if(result.answer == 'Y') {
      	this.restService.delete(this.user.id).subscribe(res => {
      		this.router.navigate(['users']);
      	});      	
      }
 	  
    });

  	
  }

}

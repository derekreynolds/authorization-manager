import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { ToolbarSetupService } from 'app/common/util';
import { User } from 'app/common/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private restService: RestService<User>;

  dataSource: MatTableDataSource<User>; 

	displayedColumns = ['username', 'firstName', 'lastName'];

	constructor(private router: Router, private toolbarSetupService: ToolbarSetupService, private restClientFactoryService: RestClientFactoryService) { 

	  toolbarSetupService.initialiseToolbar();
		toolbarSetupService.initialiseNavigationTabs();

    this.restService = restClientFactoryService.get(new User);
	}

	ngOnInit() {    
    this.restService.getAll().subscribe(res => { 
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
	}

  onClickAdd() {
    this.router.navigate(['users/add']);
  }

  onClickShow(id: number) {
    this.router.navigate(['users/show', id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { ToolbarSetupService } from 'app/common/util';
import { SecurityGroup } from 'app/common/model';

@Component({
  selector: 'er-security-group',
  templateUrl: './security-group.component.html',
  styleUrls: ['./security-group.component.scss']
})
export class SecurityGroupComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private restService: RestService<SecurityGroup>;

  dataSource: MatTableDataSource<SecurityGroup>; 

	displayedColumns = ['name'];

	constructor(private router: Router, private toolbarSetupService: ToolbarSetupService, private restClientFactoryService: RestClientFactoryService) { 

	  toolbarSetupService.initialiseToolbar();
		toolbarSetupService.initialiseNavigationTabs();

    this.restService = restClientFactoryService.get(new SecurityGroup);
	}

	ngOnInit() {    
    this.restService.getAll().subscribe(res => { 
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
	}

  onClickAdd() {
    this.router.navigate(['security-groups/add']);
  }

  onClickShow(id: number) {
    this.router.navigate(['security-groups/show', id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

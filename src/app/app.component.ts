import { Component, OnInit } from '@angular/core';

import { ToolbarService } from 'app/common/ui/toolbar';
import { RestClientFactoryService } from 'app/common/rest'
import { User, SecurityGroup } from 'app/common/model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
	constructor(private toolbarService: ToolbarService, private restClientFactoryService: RestClientFactoryService) {

	}

    ngOnInit() {
    	this.toolbarService.setApplicationName('Authorization Manager');
    	this.toolbarService.setShowToolbar(true);

    	this.restClientFactoryService.register(new User, 'api/v1/users');
    	this.restClientFactoryService.register(new SecurityGroup, 'api/v1/security-groups');
    }
}

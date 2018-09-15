import { Injectable } from '@angular/core';

import { ToolbarService, NavigationLink } from 'app/common/ui/toolbar';

@Injectable()
export class ToolbarSetupService {

	constructor(private toolbarService: ToolbarService) {
	  	
	}


	initialiseToolbar() {
		this.toolbarService.setApplicationName('Authorization Manager');
	}

	initialiseNavigationTabs() {
		this.toolbarService.setNavigationLinks([new NavigationLink('Users', '/users'), new NavigationLink('Security groups', '/securitygroups'), new NavigationLink('Admin', '/admin')]);
  		this.toolbarService.setShowTabs(true);
	}

}

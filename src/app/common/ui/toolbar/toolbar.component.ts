import { Component, OnInit } from '@angular/core';

import { NavigationLink } from './navigation-link';

import { ToolbarService } from './toolbar.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	showToolbar: boolean = false;

	showTabs: boolean = false;

	applicationName: string;

	navigationLinks: NavigationLink[];

	constructor(private toolbarService: ToolbarService) {
		toolbarService.getApplicationName().subscribe(applicationName => {
			this.applicationName = applicationName;
		});
		toolbarService.getNavigationLinks().subscribe(navigationLinks => {
			this.navigationLinks = navigationLinks;
		});
		toolbarService.getShowToolbar().subscribe(showToolbar => {
			this.showToolbar = showToolbar;
		});
		toolbarService.getShowTabs().subscribe(showTabs => {
			this.showTabs = showTabs;
		});
	}

	ngOnInit() {
	}

}

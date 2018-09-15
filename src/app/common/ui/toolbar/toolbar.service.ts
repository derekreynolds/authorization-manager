import { Injectable } from '@angular/core';

import { NavigationLink } from './navigation-link';

import { Subject } from 'rxjs/Subject';


@Injectable()
export class ToolbarService {

	private showToolbar = new Subject<boolean>();

	private showTabs = new Subject<boolean>();

	private applicationName = new Subject<string>();

	private navigationLinks = new Subject<NavigationLink[]>();

	constructor() { }

	setApplicationName(applicationName: string) {
		this.applicationName.next(applicationName);
	}

	getApplicationName(): Subject<string> {
		return this.applicationName;
	}

	setNavigationLinks(navigationLinks: NavigationLink[]) {
		this.navigationLinks.next(navigationLinks);
	}

	getNavigationLinks(): Subject<NavigationLink[]> {
		return this.navigationLinks;
	}

	setShowToolbar(show: boolean) {
		this.showToolbar.next(show);
	}

	getShowToolbar(): Subject<boolean> {
		return this.showToolbar;
	}

	setShowTabs(show: boolean) {
		this.showTabs.next(show);
	}

	getShowTabs(): Subject<boolean> {
		return this.showTabs;
	}

}

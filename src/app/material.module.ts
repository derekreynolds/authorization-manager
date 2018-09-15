import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule, MatTabsModule, MatSortModule, MatTableModule, MatPaginatorModule, 
		MatIconModule, MatChipsModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { MatMomentDateModule }	from '@angular/material-moment-adapter';	
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  	MatButtonModule, 
  	MatCheckboxModule,
  	MatToolbarModule,
  	MatTabsModule,
  	MatInputModule,
  	MatCardModule,
  	MatSortModule,
  	MatTableModule,
  	MatPaginatorModule,
  	MatIconModule,
  	MatChipsModule,
  	MatDatepickerModule,
  	MatMomentDateModule,
  	MatSelectModule
  ],
  exports: [
  	MatButtonModule,
  	MatCheckboxModule,
  	MatToolbarModule,
  	MatTabsModule,
  	MatInputModule,
  	MatCardModule,
  	MatSortModule,
  	MatTableModule,
  	MatPaginatorModule,
  	MatIconModule,
  	MatChipsModule,
  	MatDatepickerModule,
  	MatMomentDateModule,
  	MatSelectModule
  ],
})
export class MaterialModule { }

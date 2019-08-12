import { Component,Input, OnInit,AfterViewInit,ViewChild,OnChanges  } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { EmployeeData } from "../app.component";//importing interface


@Component({
  selector: 'app-emp-details-table',
  templateUrl: './emp-details-table.component.html',
  styleUrls: ['./emp-details-table.component.css']
})
export class EmpDetailsTableComponent implements AfterViewInit,OnChanges  {
  
  displayedColumns: string[] = ["employeeId", "employeeName", "empDesignation", "age"];
  @Input() dataSource: MatTableDataSource<EmployeeData>;//property access from Parent component
  @ViewChild (MatPaginator,{ read: false,static: true }) paginator: MatPaginator;
  constructor(){

  }
   ngAfterViewInit() {//first time when view gets loaded, apply pagination 
      this.dataSource.paginator = this.paginator;
   }
   ngOnChanges(){//after applying filter, datasource changes
  this.dataSource.paginator = this.paginator;
}

}

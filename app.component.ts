import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import  * as EmpDataJSON from '../../src/assets/MOCK_DATA.json';//reading local json file

export interface EmployeeData {
  employeeID: string;
  employeeName: string;
  employeeDesign: string;
  employeeAge: string;
 
}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Age Filter Widget';  
  dataSource = new MatTableDataSource<EmployeeData>(EmpDataJSON.default);//load data first time
  selectedFilter = 'All Records';
  applyFilter(value : any){//function to apply filter
    this.dataSource = new MatTableDataSource<EmployeeData>(EmpDataJSON.default);
   if(value == 'below20'){
     this.dataSource.data = this.dataSource.data.filter(v =>{
      return parseInt(v["age"]) < 20
       }); 
      this.selectedFilter = 'Below 20yrs';
   }
   else if(value == '20to40')
   {  
      this.dataSource.data = this.dataSource.data.filter(v =>{
      return parseInt(v["age"]) >= 20 && parseInt(v["age"]) <= 40
       });
       this.selectedFilter = '20 to 40 years';
         }
   else if(value == '40to60')
   {
     this.dataSource.data = this.dataSource.data.filter(v =>{
      return parseInt(v["age"]) > 40 && parseInt(v["age"]) <= 60
       });
       this.selectedFilter = '40 to 60 years';
   }
   else if(value == 'above60')
   {
      this.dataSource.data = this.dataSource.data.filter(v =>{
      return parseInt(v["age"]) > 60
       });
       this.selectedFilter = 'Above 60yrs';
   }
  
  }
  
}

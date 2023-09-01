import { Component } from '@angular/core';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent {
  data = [
    {id:1, name:'Praveen', age:28, city: 'Bangalore'},
    {id:2, name:'Krishna', age:30, city: 'Managlore'},
    {id:3, name:'Ranga', age:30, city: 'Singapore'},
    {id:4, name:'Tunga', age:30, city: 'Managlore'},
    {id:5, name:'Rahim', age:30, city: 'Hyderabad'},
    {id:6, name:'Lavanya', age:30, city: 'Managlore'},
    {id:7, name:'Ramu', age:30, city: 'Managlore'},
    {id:8, name:'Nani', age:30, city: 'Managlore'},
    {id:9, name:'Ramana', age:30, city: 'Managlore'},
    {id:10, name:'Byra', age:30, city: 'Managlore'},
    {id:11, name:'Usman', age:30, city: 'Mumbai'},
    {id:12, name:'Ramya', age:30, city: 'Managlore'},
    {id:13, name:'Chetan', age:30, city: 'Managlore'},
    {id:14, name:'Thilak', age:30, city: 'Bangalore'},
    {id:15, name:'Nethra', age:30, city: 'Managlore'},
    {id:16, name:'Anil', age:30, city: 'Managlore'},
    {id:17, name:'Kariyappa', age:30, city: 'Managlore'},
    {id:18, name:'Ramprakash', age:30, city: 'Tumkur'},
    {id:19, name:'Neeraj', age:30, city: 'Managlore'},
    {id:20, name:'Chopra', age:30, city: 'Managlore'},
  ];
p: number =1;
isMenuCollapsed: boolean = false;
toggleMenu() {
  this.isMenuCollapsed = !this.isMenuCollapsed ;
}

}


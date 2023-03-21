import {CommonModule, NgForOf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ChangeDetectorRef, Component, effect, inject, signal} from '@angular/core';
import {Employee, EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule,HttpClientModule],
  providers:[EmployeeService],
  template: `
    <div style="margin:20px">
      <h1>Angular Signals (Without Zone.js)</h1>
      <hr/>
      <h2>Employees</h2>
      <div *ngFor="let employee of employees()">
        <p>First Name: {{ employee.firstName }}</p>
        <p>Last Name: {{ employee.lastName }}</p>
        <p>Email: {{ employee.email }}</p>
        <p>Phone: {{ employee.phone }}</p>
        <p>Age: {{ employee.age }}</p>
        <hr/>
      </div>
      <br/>
    </div>
  `
})
export default class HomeComponent {
  employeeService = inject(EmployeeService);
  cdr = inject(ChangeDetectorRef);
  employees = signal<Employee[]>([]);

  constructor() {
    effect(() => {
      console.log('Inside effect(). Employee changed', this.employees());
    });
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees.set(data);
      this.cdr.detectChanges();
    });
  }
}

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
      <h1>About Page</h1>
    </div>
  `
})
export default class AboutPage {
}

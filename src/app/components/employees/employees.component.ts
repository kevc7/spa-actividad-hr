import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employees.service'; // Asegúrate de importar correctamente

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {} // Cambia EmployeesService a EmployeeService

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees(); // Cambia employeesService a employeeService
  }
}

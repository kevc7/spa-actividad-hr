import { Injectable } from '@angular/core';

export interface Employee {
  employee_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  hire_date: string; // formato: 'YYYY-MM-DD HH:mm:ss'
  job_title: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      employee_id: 100,
      first_name: "Steven",
      last_name: "King",
      email: "sking@example.com",
      phone_number: "515.123.4567",
      hire_date: "1987-06-17 00:00:00",
      job_title: "AD_PRES",
      salary: 24000.00
    },
    {
      employee_id: 101,
      first_name: "Neena",
      last_name: "Kochhar",
      email: "nkochhar@example.com",
      phone_number: "515.123.4568",
      hire_date: "1989-09-21 00:00:00",
      job_title: "AD_VP",
      salary: 17000.00
    },
    {
      employee_id: 102,
      first_name: "Lex",
      last_name: "De Haan",
      email: "ldehaan@example.com",
      phone_number: "515.123.4569",
      hire_date: "1993-01-13 00:00:00",
      job_title: "AD_VP",
      salary: 17000.00
    },
    {
      employee_id: 103,
      first_name: "Alexander",
      last_name: "Hunold",
      email: "ahunold@example.com",
      phone_number: "590.423.4567",
      hire_date: "1990-01-03 00:00:00",
      job_title: "IT_PROG",
      salary: 9000.00
    },
    {
      employee_id: 104,
      first_name: "Bruce",
      last_name: "Ernst",
      email: "bernist@example.com",
      phone_number: "590.423.4568",
      hire_date: "1991-05-21 00:00:00",
      job_title: "IT_PROG",
      salary: 6000.00
    },
    
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}

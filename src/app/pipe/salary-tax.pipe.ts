import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryTax'
})
export class SalaryTaxPipe implements PipeTransform {
  transform(salary: number, tax: number = 10) {
    return salary - (salary * tax / 100);
  }
}

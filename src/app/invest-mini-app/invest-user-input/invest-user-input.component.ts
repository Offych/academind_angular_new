import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-invest-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invest-user-input.component.html',
  styleUrl: './invest-user-input.component.css',
})
export class InvestUserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedValue = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedValue,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invest-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invest-user-input.component.html',
  styleUrl: './invest-user-input.component.css',
})
export class InvestUserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedValue = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log('Submitted');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedValue);
    console.log(this.enteredDuration);
  }
}

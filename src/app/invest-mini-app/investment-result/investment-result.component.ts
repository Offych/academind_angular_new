import { Component, input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  results = input<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[]
  >();
}

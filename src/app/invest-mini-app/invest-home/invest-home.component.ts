import { Component } from '@angular/core';
import { InvestHeaderComponent } from '../invest-header/invest-header.component';
import { InvestUserInputComponent } from '../invest-user-input/invest-user-input.component';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentResultComponent } from '../investment-result/investment-result.component';

@Component({
  selector: 'app-invest-home',
  standalone: true,
  templateUrl: './invest-home.component.html',
  styleUrl: './invest-home.component.css',
  imports: [
    InvestHeaderComponent,
    InvestUserInputComponent,
    InvestmentResultComponent,
  ],
})
export class InvestHomeComponent {
  resultsData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  onCalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, annualInvestment, expectedReturn } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}

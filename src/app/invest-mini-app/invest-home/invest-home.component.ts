import { Component } from '@angular/core';
import { InvestHeaderComponent } from '../invest-header/invest-header.component';
import { InvestUserInputComponent } from '../invest-user-input/invest-user-input.component';

@Component({
  selector: 'app-invest-home',
  standalone: true,
  templateUrl: './invest-home.component.html',
  styleUrl: './invest-home.component.css',
  imports: [InvestHeaderComponent, InvestUserInputComponent],
})
export class InvestHomeComponent {}

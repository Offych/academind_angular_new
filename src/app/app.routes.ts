import { Routes } from '@angular/router';
import { InvestHomeComponent } from './invest-mini-app/invest-home/invest-home.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

const routeConfig: Routes = [
  {
    path: 'invest',
    component: InvestHomeComponent,
    title: 'Home page',
  },
  {
    path: '',
    component: LayoutComponent,
  },
];

export default routeConfig;

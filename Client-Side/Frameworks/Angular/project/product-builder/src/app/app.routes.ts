import { destroyDetachedRouteHandle, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { DesignSystem } from './design-system/design-system';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Home },
  { path: 'design-system', component: DesignSystem },
];

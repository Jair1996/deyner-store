import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DashboardAuthorizationGuard } from './core/guards/dashboard-authorization.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then((m) => m.ProtectedModule),
    // ...canActivate(() => redirectUnauthorizedTo(['/'])),
    canActivate: [DashboardAuthorizationGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

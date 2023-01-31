import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';

import { ProtectedLayoutComponent } from './layout/protected-layout/protected-layout.component';

@NgModule({
  declarations: [ProtectedLayoutComponent],
  imports: [CommonModule, ProtectedRoutingModule],
})
export class ProtectedModule {}

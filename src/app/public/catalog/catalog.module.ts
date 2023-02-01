import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { SharedModule } from '../shared/shared.module';
import { SharedModule as GlobalSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CatalogPageComponent],
  imports: [CommonModule, CatalogRoutingModule, GlobalSharedModule, SharedModule],
})
export class CatalogModule {}

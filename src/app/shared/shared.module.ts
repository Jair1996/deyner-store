import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SpinnerComponent, ButtonComponent],
  exports: [SpinnerComponent, ButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}

import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class DefaultLayoutModule {}

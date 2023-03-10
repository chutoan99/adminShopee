import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AsideModule } from 'src/components/aside/aside.module';
import { HeaderModule } from 'src/components/header/header.module';
import { OrderComponent } from './order.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [OrderComponent],
  imports: [NzButtonModule, NzTableModule, CommonModule, HeaderModule, AsideModule, RouterModule, HttpClientModule, BrowserModule, FormsModule],
})
export class OrderModule {}

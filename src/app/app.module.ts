import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
// tslint:disable-next-line: match-default-export-name
import en from '@angular/common/locales/en';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(en);
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppModule {}

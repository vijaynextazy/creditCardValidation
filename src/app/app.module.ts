import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardTaskComponent } from './card-task/card-task.component';
import { CardSpacingDirective } from './card-spacing.directive';
import { ExpiryDateDirective } from './expiry-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardTaskComponent,
    CardSpacingDirective,
    ExpiryDateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

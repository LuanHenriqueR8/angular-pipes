import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSizePipe } from '../shared/pipes/FileSizePipe';
import { LogPipe } from '../shared/pipes/LogPipe';

@NgModule({
  declarations: [
    AppComponent,
    FileSizePipe,
    LogPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

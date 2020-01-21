import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { TodoListComponent } from '../todolist/todolist.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TodoListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

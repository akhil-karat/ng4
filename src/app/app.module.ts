import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRouter} from './app.router.module';
import {NotfoundComponent} from './notfound/notfound.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeService} from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRouter,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

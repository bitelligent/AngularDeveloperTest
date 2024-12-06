import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './components/activity/activity.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconMug, IconPhone, IconBeer, IconMessageCircle, IconUser, IconMenuDeep, IconCaretDownFilled } from 'angular-tabler-icons/icons';

const icons = {
  IconMessageCircle,
  IconPhone,
  IconMug,
  IconBeer,
  IconUser,
  IconMenuDeep,
  IconCaretDownFilled
};

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    TablerIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

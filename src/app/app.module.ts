import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RainComponent } from './rain/rain.component';
// import { RainDropComponent } from './rain-drop/rain-drop.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { ParallaxDirective } from './parallax.directive';
import { FeaturedVideoComponent } from './featured-video/featured-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RainComponent,
    VideoCardComponent,
    LoaderComponent,
    ParallaxDirective,
    FeaturedVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

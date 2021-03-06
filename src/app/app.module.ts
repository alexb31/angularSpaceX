import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Routers/app-routing/app-routing.module';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

import { SharedModule } from './Modules/shared/shared.module';
import { DetailedCapsuleDataComponent } from './components/detailed-capsule-data/detailed-capsule-data.component';
import { DetailedCoreDataComponent } from './components/detailed-core-data/detailed-core-data.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchpadDataComponent } from './components/launchpad-data/launchpad-data.component';
import { RocketDataComponent } from './components/rocket-data/rocket-data.component';
import { LaunchesListComponent } from './components/launches-list/launches-list.component';
import { LaunchComponent } from './components/launch/launch.component';
import { CapsuleDataComponent } from './components/capsule-data/capsule-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    RocketDataComponent,
    LaunchpadDataComponent,
    LaunchesComponent,
    DetailedCapsuleDataComponent,
    DetailedCoreDataComponent,
    LaunchesListComponent,
    LaunchComponent,
    CapsuleDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

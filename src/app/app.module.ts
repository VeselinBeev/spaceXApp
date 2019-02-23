import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LaunchesComponent } from "./launches/launches.component";
import { RocketsComponent } from "./rockets/rockets.component";
import { FullLauncheDataComponent } from "./full-launche-data/full-launche-data.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { ApiService } from "./api/api.service";
import { FilterPipeModule } from "ngx-filter-pipe";
@NgModule({
    declarations: [
        AppComponent,
        LaunchesComponent,
        RocketsComponent,
        FullLauncheDataComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FilterPipeModule,
        HttpClientJsonpModule,
        FormsModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}

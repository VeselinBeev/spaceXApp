import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";

@Component({
    selector: "app-launches",
    templateUrl: "./launches.component.html",
    styleUrls: ["./launches.component.scss"]
})
export class LaunchesComponent implements OnInit {
    launchList: any[];
    launchListTFFilter: any = { launch_success: "" };
    constructor(private __apiServce: ApiService) {}

    ngOnInit() {
        this.__apiServce
            .getLaunches()
            .subscribe(data => (this.launchList = data));
    }
    getUrl() {}
}

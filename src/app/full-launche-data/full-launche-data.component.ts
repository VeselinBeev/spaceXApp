import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";

@Component({
    selector: "app-full-launche-data",
    templateUrl: "./full-launche-data.component.html",
    styleUrls: ["./full-launche-data.component.scss"]
})
export class FullLauncheDataComponent implements OnInit {
    launchList: any[];
    launchListMissionFilter: any = { mission_name: "" };
    constructor(private __apiServce: ApiService) {}

    ngOnInit() {
        this.__apiServce
            .getLaunches()
            .subscribe(data => (this.launchList = data));
    }
    getUrl() {}
}

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";
@Component({
    selector: "app-rockets",
    templateUrl: "./rockets.component.html",
    styleUrls: ["./rockets.component.scss"]
})
export class RocketsComponent implements OnInit {
    launchList: any[];
    launchListFilter: any = { name: null };
    constructor(private __apiServce: ApiService) {}

    ngOnInit() {
        this.__apiServce
            .getLaunches()
            .subscribe(data => (this.launchList = data));
    }
    getUrl() {}
}

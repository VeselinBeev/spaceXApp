import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";

@Component({
    selector: "app-launches",
    templateUrl: "./launches.component.html",
    // template: `
    //     <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //             <button class="btn btn-outline-secondary" type="button">
    //                 Button
    //             </button>
    //         </div>
    //         <input type="text" class="form-control" placeholder="" />
    //     </div>
    //     <h2>Launches List</h2>

    //     <ul class="d-block" *ngFor="let laun of launchList">
    //         <li>{{ laun.flight_number }}</li>
    //         <li>{{ laun.mission_name }}</li>
    //         <li>{{ laun.launch_year }}</li>
    //         <li>{{ laun.launch_success }}</li>
    //     </ul>
    // `,
    styleUrls: ["./launches.component.scss"]
})
export class LaunchesComponent implements OnInit {
    launchList: any[];
    launchListFilter: any = { name: null };
    constructor(private __apiServce: ApiService) {}

    ngOnInit() {
        this.__apiServce
            .getLaunches()
            .subscribe(data => (this.launchList = data));
    }
}

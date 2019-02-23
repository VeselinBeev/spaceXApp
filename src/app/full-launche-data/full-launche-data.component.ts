import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";

@Component({
    selector: "app-full-launche-data",
    template: ``,
    // template: `
    //     <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //             <button class="btn btn-outline-secondary" type="button">
    //                 Button
    //             </button>
    //         </div>
    //         <input type="text" [(ngModel)]="launchListFilters" placeholder="" />
    //     </div>
    //     <h2>Launches List</h2>
    //     <ul class="d-block" *ngFor="let laun of launchLists">
    //         <li *ngFor="let laun of (launchLists | filterBy: launchListFilters)"
    //         >
    //             {{ launchLists.launch_year }}
    //         </li>
    //         <li *ngIf="(users | filterBy: launchListFilters).length === 0">
    //             No matching elements
    //         </li>
    //     </ul>
    // `,
    styleUrls: ["./full-launche-data.component.scss"]
})
export class FullLauncheDataComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

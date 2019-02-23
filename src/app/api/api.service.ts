import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ILaunches } from "./launches";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
    private _url: string = "https://api.spacexdata.com/v3/launches";

    constructor(private http: HttpClient) {}

    getLaunches(): Observable<ILaunches[]> {
        return this.http.get<ILaunches[]>(this._url);
    }
}

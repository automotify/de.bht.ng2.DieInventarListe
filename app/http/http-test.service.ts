/**
 * Created by andre on 04.07.2016.
 */
import {Injectable} from '@angular/core';
import {Http, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
    constructor(private _http:Http, private jsonp: Jsonp){}

    private blizzKey = "?locale=de_DE&apikey=4hszupqr2sctzvvadhmvf2vwhm2cgjmr";
    private blizzUrl = "https://eu.api.battle.net/wow/item/";

    getUsersByPromise(id: number){
        return this._http.get(this.blizzUrl + id + this.blizzKey)
                .toPromise()
                .then(res=>res.json());
    };
}
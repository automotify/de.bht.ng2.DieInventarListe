/**
 * Created by andre on 04.07.2016.
 */
import {Component}  from '@angular/core';
import {HTTPTestService} from './http-test.service';
import {JSONP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'http-test',
    template: `
    <button (click) = "getBlizzData()">Get Blizz Items</button><br/>
    <div>
       <li *ngFor="let item of blizzItems">{{item.name}} <img src="http://media.blizzard.com/wow/icons/56/{{item.icon}}.jpg" alt="" /></li>
    </div><br/>
  `,
    providers: [HTTPTestService, JSONP_PROVIDERS]
})

export class HTTPTestComponent {

    private items = [76749, 76750, 76751, 76752, 76753];
    private blizzItems = [];

    constructor(private _httpService:HTTPTestService) {
    }

    getBlizzData() {
        console.log('Getting user based on promise now.');
        this.items.forEach(item => {
            this._httpService.getUsersByPromise(item)
                .then(
                    //res=>this.getPromiseData = JSON.stringify(res)
                    res=>this.blizzItems.push(res),
                    err=>alert(err)
                );

        });
    }


}
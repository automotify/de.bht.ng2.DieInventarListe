/**
 * Created by Andreas Burger & Daniel Schleußner on 13.07.2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'my-popover',
    template: `<span class="popover above" [class.popover-active]="active">
                <div><p>Name   : {{ name }}</p> 
                    <p>Level:     {{ level }}</p> 
                    <p>Type:   {{ type }}</p> 
                    <p>Equiped:  {{ donned }}</p> 
                    <p>Category:  {{ category }}</p> 
                    <p>Value:   {{ value }}</p>
                </div>
                <ng-content></ng-content>               
              </span>`
})

export class PopoverComponent {
    active  : boolean = false;
    name    : string;
    level   : number;
    type    : string;
    donned  : boolean;
    category: string;
    value   : number;

    constructor() {

    }
}

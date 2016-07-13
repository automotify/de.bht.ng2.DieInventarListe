/**
 * Created by Andreas Burger & Daniel Schleußner on 13.07.2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'my-popover',
    template: `<span class="popover above" [class.popover-active]="active">
                <div>{{ title }}</div>
                <ng-content></ng-content>               
              </span>`
})

export class PopoverComponent {
    active: boolean = false;
    title: string;
    constructor() {

    }
}

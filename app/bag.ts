/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */

import {Component} from "angular2/core";
import {Item} from "./item";

@Component({
    selector: 'my-bag',
    template: `<div>
        <h2>Unselected Items! - bag</h2>
        
    </div>`
})

export class Bag {
    private id_bag :number;
    private items  :Item[];

}
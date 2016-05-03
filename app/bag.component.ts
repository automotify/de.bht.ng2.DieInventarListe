/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */

import {Component} from "angular2/core";
import {Item} from "./item";

@Component({
    selector: 'my-bag',
    template: `<h2>Unselected Items! - bag</h2>`
})

export class Bag {
    private items  :Item[];
}
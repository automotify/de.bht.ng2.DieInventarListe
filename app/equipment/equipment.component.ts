/**
 * Created by Andreas Burger on 03.05.2016.
 */

import {Component}  from "../../node_modules/angular2/core.d";
import {Equipment}  from "./equipment";
import {Hero}       from "./../hero/hero";

@Component({
    selector: 'my-equipment',
    template: `<h1>Equipment</h1>`
})

export class EquipmentComponent{
    private hero : Hero;
    private equipment : Equipment;

    constructor(){

    }
}

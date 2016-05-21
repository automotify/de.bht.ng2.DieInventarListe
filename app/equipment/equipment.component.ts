/**
 * Created by Andreas Burger on 03.05.2016.
 */

import {Component}  from "angular2/core";
import {Equipment}  from "./equipment.model";
import {Hero}       from "../hero/index";

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

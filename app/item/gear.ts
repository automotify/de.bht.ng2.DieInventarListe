/**
 * Created by padawan on 13.05.16.
 */

import {Item} from "./item"

export class Gear extends Item {
    gearType:string;
    gearDefenseValue:number;

    constructor(name: string, gearType:string, gearDefenseValue:number) {
        super("gear", name);
        this.gearType = gearType;
        this.gearDefenseValue = gearDefenseValue;
    }
}
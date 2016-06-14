/**
 * Created by padawan on 13.05.16.
 */
import {Item} from "./item.model"

export class Gear extends Item {
    gearCategory:string;
    gearDefenseValue:number;

    constructor(name: string, gearCat:string, gearDefenseValue:number) {
        super("gear", name);
        this.gearCategory = gearCat;
        this.gearDefenseValue = gearDefenseValue;
    }
}
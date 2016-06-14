/**
 * Created by padawan on 13.05.16.
 */
import {Item} from "./item.model"

export class Gear extends Item {
    //gearType:string;
    gearDefenseValue:number;

    constructor(name: string, type:string, gearDefenseValue:number) {
        super(name, type);
        //this.gearType = gearType;
        this.gearDefenseValue = gearDefenseValue;
    }
}
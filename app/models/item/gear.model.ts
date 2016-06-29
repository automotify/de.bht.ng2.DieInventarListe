import { Item } from "./item.model"

export class Gear extends Item {
    public _gearCategory        :string;
    public _gearDefenseValue    :number;

    constructor(name: string, gearCategory:string, gearDefenseValue:number) {
        super("gear", name);
        this._gearCategory = gearCategory;
        this._gearDefenseValue = gearDefenseValue;
    }
}
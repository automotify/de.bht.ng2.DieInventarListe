import { Item } from "./item.model"

export class Gear extends Item {
    public _gearCategory        :string;
    public _gearDefenseValue    :number;

    constructor(id:number, itemName:string, itemType:string, heroId:number, gearCategory:string, gearDefenseValue:number) {
        super(id, itemName, itemType, heroId);
        this._gearCategory = gearCategory;
        this._gearDefenseValue = gearDefenseValue;
    }
}
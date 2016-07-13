import { Item } from "./item.model"

export class Gear extends Item {
    public _gearCategory        :string;
    public _gearDefenseValue    :number;

    constructor(id:number, itemName:string, itemLevel: number, heroId:number, blizzItemId: number, _blizzItemIcon: string, gearCategory:string, gearDefenseValue:number) {
        super(id, itemName, itemLevel, "Gear", heroId, blizzItemId, _blizzItemIcon);
        this._gearCategory = gearCategory;
        this._gearDefenseValue = gearDefenseValue;
    }
}
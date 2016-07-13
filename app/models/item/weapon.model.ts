import {Item} from "./item.model";

export class Weapon extends Item {
    public _weaponCategory      :string;
    public _weaponDamageValue   :number;


    constructor(id:number, itemName:string, itemLevel: number, itemType:string, heroId:number, blizzItemId: number, _blizzItemIcon: string, weaponCategory:string, weaponDamageValue:number) {
        super(id, itemName, itemLevel, itemType, heroId, blizzItemId, _blizzItemIcon);
        this._weaponCategory = weaponCategory;
        this._weaponDamageValue = weaponDamageValue;
    }
}
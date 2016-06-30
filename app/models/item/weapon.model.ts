import {Item} from "./item.model";

export class Weapon extends Item {
    public _weaponCategory      :string;
    public _weaponDamageValue   :number;


    constructor(id:number, itemName:string, itemType:string, heroId:number, weaponCategory:string, weaponDamageValue:number) {
        super(id, itemName, itemType, heroId);
        this._weaponCategory = weaponCategory;
        this._weaponDamageValue = weaponDamageValue;
    }
}
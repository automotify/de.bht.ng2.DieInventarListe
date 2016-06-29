import {Item} from "./item.model";

export class Weapon extends Item {
    public _weaponCategory      :string;
    public _weaponDamageValue   :number;

    constructor(name: string, weaponCategory:string, weaponDamageValue:number) {
        super("weapon", name);
        this._weaponCategory = weaponCategory;
        this._weaponDamageValue = weaponDamageValue;
    }
}
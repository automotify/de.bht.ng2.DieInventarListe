/**
 * Created by padawan on 13.05.16.
 */
import {Item} from "./item.model"

export class Weapon extends Item {
    public weaponType:string;
    public weaponDamageValue:number;

    constructor(name: string, weaponType:string, weaponDamageValue:number) {
        super("weapon", name);
        this.weaponType = weaponType;
        this.weaponDamageValue = weaponDamageValue;
    }
}
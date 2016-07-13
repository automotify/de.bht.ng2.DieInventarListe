import {Gear} from "./gear.model";
import {Weapon} from "./weapon.model";
import {Item} from "./item.model";
export class Equipment {
    
    //ToDo equiped item should get an id 
    //ToDO this class is in work, not finish..
    
    public equip = [
        this.helmet,
        this.shoulders,
        this.legs,
        this.chest,
        this.boots,
        this.weapon,
        this.offhand
    ];
    //id:number, itemName:string, itemType:string, heroId:number, gearCategory:string, gearDefenseValue:number
    helmet = new Gear(1, "helmet", 0, "helmet", 1, 0, "", "gear", 500);
    shoulders = new Gear(1, "Schultern der Zerstörung", 0, "schoulder",1, 0, "", "gear", 200);
    legs = new Gear(1, "legs", 0, "legs", 1, 0, "", "gear", 450);
    chest = new Gear(1, "chest", 0, "chest", 1, 0, "", "gear", 600);
    boots = new Gear(1, "boots", 0, "boots", 1, 0, "", "gear",250);
    weapon = new Weapon(1, "weapon", 0, "sword", 1, 0, "", "weapon", 250);
    offhand = new Weapon(1, "offhand", 0, "shield", 1, 0, "", "weapon",500);

    //equip[0] = helmet ;


    constructor(helmet?:Item, shoulders?:Item, legs?:Item, chest?:Item, boots?:Item, weapon?:Item, offhand?:Item) {

    }

}

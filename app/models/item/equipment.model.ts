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

    helmet = new Gear("helmet", "helmet", 500);
    shoulders = new Gear("Schultern der Zerstörung", "schoulder", 200);
    legs = new Gear("legs", "legs", 450);
    chest = new Gear("chest", "chest", 600);
    boots = new Gear("boots", "boots", 250);
    weapon = new Weapon("weapon", "sword", 250);
    offhand = new Weapon("offhand", "shield", 500);

    //equip[0] = helmet ;


    constructor(helmet?:Item, shoulders?:Item, legs?:Item, chest?:Item, boots?:Item, weapon?:Item, offhand?:Item) {

    }

}

/**
 * Shows all stuff which is equipted and so not in the bag.
 * Created by Andreas Burger on 03.05.2016.
 */
import {Item} from "../item/index";
import {Gear} from "../item/gear.model";
import {Weapon} from "../item/weapon.model";

export class Equipment {
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

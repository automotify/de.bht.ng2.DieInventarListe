/**
 * Created by padawan on 12.05.16.
 */

import {Equipment} from "../item/equipment"
import {Bag} from "../item/bag"

/**
 * Hero class
 */
export class Hero {
    public id: number;
    private name: string;
    private level: number;
    //private equipment:Equipment;
    public bag:Bag;

    /**
     * Constructor
     * @param name
     * @param level
     * @param equipment
     * @param bag
     */
    constructor(name:string, level:number/*, equipment:Equipment, bag:Bag*/) {
        this.name = name;
        this.level = level;
        //this.equipment = equipment;
        //this.bag = bag
        this.bag = new Bag(100)
    }

    /**
     * Create a new Hero
     * @param name
     * @constructor
     */
    NewHero(name:string) {
        this.name = name;
        this.level = 0;
        //this.equipment = new Equipment();
        //this.bag = ZeroBag()
    }
}
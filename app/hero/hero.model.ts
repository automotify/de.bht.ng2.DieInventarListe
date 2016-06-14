/**
 * Hero representation
 *
 * @author András Bucsi, Daniel Schleußner, Andreas Burger
 */
import {Bag} from "../bag/index";
import {Equipment} from "../equipment/equipment.model";

export class Hero {
    public id     :number;
    private name  :string;
    private level :number;
    public bag    :Bag;
    public equip  :Equipment;

    /** 
     * Constructor
     * @param name
     * @param level
     */
    constructor( name: string, level: number) {
        this.name   = name;
        this.level  = level;
        this.bag    = new Bag(100);
        this.equip  = new Equipment();
    }
}

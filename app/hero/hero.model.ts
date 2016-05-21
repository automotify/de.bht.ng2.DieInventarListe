/**
 * Hero representation
 *
<<<<<<< Updated upstream
 * @author András Bucsi
=======
 * @author András Bucsi, Daniel Schleußner, Andreas Burger
>>>>>>> Stashed changes
 */
import {Bag} from "../bag/index";

export class Hero {
    private id     :number;
    private name   :string;
    private age    :number;
    private health :number;

    /**
     * Constructor
     * @param id
     * @param name
     * @param age
     */
    constructor( id:number, name: string, age: number) {
        this.id     = id;
        this.name   = name;
        this.age    = age;
        this.health = 100; // Health is at 100 (%) upon initialisation
    }
}
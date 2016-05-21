import {Bag} from "../bag/index";
/**
 * Hero representation
 *
<<<<<<< HEAD
<<<<<<< Updated upstream
 * @author András Bucsi
=======
 * @author András Bucsi, Daniel Schleußner, Andreas Burger
>>>>>>> Stashed changes
=======
 * @author András Bucsi, Daniel Schleußner
>>>>>>> de7fff6b259fc4dbaa43d7dd50eabfbbcf1c161d
 */
import {Bag} from "../bag/index";

export class Hero {
    public id     :number;
    private name  :string;
    private level :number;
    public bag    :Bag;

    /**
     * Constructor
     * @param name
     * @param level
     */
    constructor( name: string, level: number) {
        this.name   = name;
        this.level  = level;
        this.bag    = new Bag(100);
    }
}
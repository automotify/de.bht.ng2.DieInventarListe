import {Bag} from "../bag/index";
/**
 * Hero representation
 *
 * @author András Bucsi, Daniel Schleußner
 */
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
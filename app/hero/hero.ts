/**
 * Hero representation
 *
 * @author András Bucsi
 */
export class Hero {
    private name   :string;
    private age    :number;
    private health :number;

    /**
     * Constructor
     * @param name
     * @param age
     */
    constructor( name: string, age: number) {
        this.name   = name;
        this.age    = age;
        this.health = 100; // Health is at 100 (%) upon initialisation
    }
}
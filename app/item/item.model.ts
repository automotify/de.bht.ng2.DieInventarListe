/**
 * Item represent a thing which is in equipment or in bag
 * Created by Andreas Burger on 03.05.2016.
 */
export class Item{
    public id       : number;
    public type          : string;
    public name          : string;

    /**
     * Constructor for Item instances
     *
     * @param type            of type string (categorization of the item)
     * @param name            of type string (name of the item)
     */
    constructor( type : string, name : string) {
        this.type          = type;
        this.name          = name;
    }
}
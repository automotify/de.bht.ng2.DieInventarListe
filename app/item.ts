/**
 * Item represent a thing which is in equipment or in bag
 * Created by Andreas Burger on 03.05.2016.
 */
export class Item{
    public id       : number;
    public name          : string;
    public type          : string;
    public itemValueName : string;
    public itemValue     : number;

    /**
     * Constructor for Item instances
     *
     * @param id         of type number (ID of the item)
     * @param name            of type string (name of the item)
     * @param type            of type string (categorization of the item)
     * @param itemValueName   of type string (shows what value the item_value is of)
     * @param itemValue       of type number (numeric value)
     */
    constructor( id : number, name : string, type : string, itemValueName : string, itemValue : number ) {
        this.id            = id;
        this.name          = name;
        this.type          = type;
        this.itemValueName = itemValueName;
        this.itemValue     = itemValue;
    }
}
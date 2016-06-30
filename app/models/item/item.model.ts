export class Item{
    // id is the id of that item
    public id      : number;
    // _itemName is the name of that item
    public _itemName    : string;
    // _itemType is a weapon or a gear
    public _itemType    : string;
    // _itemDonned mean if that item equip or not
    public _itemDonned  : boolean;
    // _heroId is the foreign key
    public _heroId      : number;
    
    /**
     * Constructor for Item instances
     * that item will put in the bag
     *
     * @param _itemType            of type string (categorization of the item)
     * @param _itemName            of type string (name of the item)
     */
    constructor( _itemName : string, _itemType : string ) {
        this._itemName      = _itemName;
        this._itemType      = _itemType;
        this._itemDonned    = false;
    }
}
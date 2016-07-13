export class Item{
    // id is the id of that item
    public id      : number;
    // _itemName is the name of that item
    public _itemName    : string;
    // _itemLevel is the level from the blizzard item
    public _itemLevel   : number;
    // _itemType is a weapon or a gear
    public _itemType    : string;
    // _itemDonned mean if that item equip or not
    public _itemDonned  : boolean;
    // _heroId is the foreign key
    public _heroId      : number;
    // _blizzItemId is the second foreign id from the blizzard api
    public _blizzItemId : number;
    // _icon is the image icon for the item from the blizzard api
    public _blizzItemIcon : string;

    /**
     * Constructor for Item instances
     * that item will put in the bag
     *
     * @param id
     * @param _itemType            of type string (categorization of the item)
     * @param _itemName            of type string (name of the item)
     * @param _heroId
     */
    constructor( id: number,_itemName : string, _itemLevel : number, _itemType : string, _heroId: number, _blizzItemId: number, _blizzItemIcon: string ) {
        this.id             = id;
        this._itemName      = _itemName;
        this._itemLevel     = _itemLevel;
        this._itemType      = _itemType;
        this._itemDonned    = false;
        this._heroId        = _heroId;
        this._blizzItemId   = _blizzItemId;
        this._blizzItemIcon = _blizzItemIcon;
    }
}
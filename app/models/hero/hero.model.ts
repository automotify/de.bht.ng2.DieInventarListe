import {Item} from "../item/item.model";

export class Hero {
    public id      :number;
    public _name   :string;
    public _level  :number;
    public _bag    :Item[];
    public _equip  :Item[];
    public _imgURL :string;

    /**
     * Constructor
     * @param id
     * @param name
     * @param level
     * @param imgURL
     */
    constructor( id:number = 0, name: string = "<default>", level: number = 1, imgURL: string = "") {
        this.id      = id;
        this._name   = name;
        this._level  = level;
        this._bag    = [];
        this._equip  = [];
        this._imgURL = imgURL
    }

}

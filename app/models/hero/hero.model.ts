import {Equipment} from "../item/equipment.model";

export class Hero {
    public id      :number;
    public _name   :string;
    public _level  :number;
    public _bag    :number[];
    public _equip  :Equipment;
    public _imgURL :string;

    /**
     * Constructor
     * @param id
     * @param name
     * @param level
     * @param imgURL
     */
    constructor( id:number = 0, name: string = "<default>", level: number = 0, imgURL: string = "") {
        this.id      = id;
        this._name   = name;
        this._level  = level;
        this._bag    = [];
        this._equip  = new Equipment();
        this._imgURL = imgURL
    }

}

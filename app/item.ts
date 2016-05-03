/**
 * Item represent a thing which is in equipment or in bag
 * Created by Andreas Burger on 03.05.2016.
 */
export class Item{
    private id_item: number;
    private name: string;
    private type: string;
    private item_value_name: string;
    private item_value: number;


    constructor(id_item:number, name:string, type:string, item_value_name:string, item_value:number) {
        this.id_item = id_item;
        this.name = name;
        this.type = type;
        this.item_value_name = item_value_name;
        this.item_value = item_value;
    }
}
/**
 * Bag Class for Bag Component
 */
import {Item} from './item';

export class Bag{
    private size    : number;
    public itemList: Item[];

    constructor( size:number ){
        this.size     = size;
        this.itemList = [];
    }

    /**
     * adds a certain item to the item itemList
     * checks whether the bag is full or not (length of ist and size of bag)
     *
     * @param item item to be added
     */
    public addItem( item:Item ){
        if( this.itemList.length < this.size ) {
            this.itemList.push(item);
        } else {
            console.log('List full. '+item+' could not be added to itemList\n'+this.itemList);
        }
    }

    /**
     * Removes a certain item from the itemList
     * @param item the certain item
     */
    public removeItem( item:Item ){
        if( this.itemList.length < this.size ) {
            let index:number = this.itemList.indexOf(item,0);
            if( index > -1 ){
                this.itemList.splice(index,1)
            }else {
                console.log('Item is not contained in itemList');
            }
        } else {
            console.log('List empty. '+item+' is not contained in itemList\n'+this.itemList);
        }
    }
}
/**
 * Created by padawan on 13.05.16.
 */
export class Item {
    id  : number;
    type: string; //if gear oder weapon
    name: string;
    
    constructor(type: string, name:string) {
        this.type = type;
        this.name = name;
    }
}
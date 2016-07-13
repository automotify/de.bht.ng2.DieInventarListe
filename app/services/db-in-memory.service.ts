
import {Hero} from "../models/hero/hero.model";
import {Equipment} from "../models/item/equipment.model";
import {Item} from "../models/item/item.model";
import {Gear} from "../models/item/gear.model";
/**
 * hero-list.model.ts and hero-list.component.ts are deprecated, because the methods of these classes
 * are unused. We used the hero.service.ts methods now.
 */

export var HEROES: Hero[] = [
    {id: 0, _name: "Van Helsing"   , _level:  80, _bag: [76749, 76750, 76751, 76752, 76753], _equip: new Equipment(), _imgURL: "http://www.renders-graphiques.fr/image/upload/normal/van_helsing1.png"},
    {id: 1, _name: "Super Mario"   , _level: 150, _bag: [], _equip: new Equipment(), _imgURL: "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"},
    {id: 2, _name: "Hulk"          , _level: 999, _bag: [], _equip: new Equipment(), _imgURL: "http://www.pngall.com/wp-content/uploads/2016/03/Hulk-PNG.png"},
    {id: 3, _name: "Son Goku"      , _level: 700, _bag: [], _equip: new Equipment(), _imgURL: "http://vignette3.wikia.nocookie.net/vsbattles/images/0/04/Goku_super_saiyan_god_normal_dbz_2013_by_xyelkiltrox-d66znce.jpg/revision/latest?cb=20150803133837"}
];

// id: number,_itemName : string, _itemLevel : number, _itemType : string, _heroId: number, _blizzItemId: number
let standardGlove    = new Gear(0, "Handwickel der tiefen Erde" , 397, 0, 76749, "inv_glove_leather_raiddruid_k_01", "Helmet", 24);
let standardHelmet   = new Gear(1, "Helm der tiefen Erde"       , 397, 0, 76750, "inv_helmet_leather_raiddruid_k_01", "Helmet", 27);
let standardShoulder = new Gear(2, "Mantelung der tiefen Erde"  , 397, 0, 76751, "inv_shoulder_leather_raiddruid_k_01", "Helmet", 20);
let standardChest    = new Gear(3, "Roben der tiefen Erde"      , 397, 0, 76752, "inv_chest_leather_raiddruid_k_01", "Helmet", 33);
let standardPant     = new Gear(4, "Beinwickel der tiefen Erde" , 397, 0, 76753, "inv_pant_leather_raiddruid_k_01", "Helmet", 29);
export var ITEMS: Item[] = [ standardGlove, standardHelmet, standardShoulder, standardChest, standardPant ];

/*
export class DBInMemoryData {
    createDb() {
        let heroes= [
            {id: 1, _name: "Van Helsing"   , _level:  80,
                _imgURL: "http://www.renders-graphiques.fr/image/upload/normal/van_helsing1.png"},
            {id: 2, _name: "Super Mario"   , _level: 150,
                _imgURL: "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"},
            {id: 3, _name: "Hulk"          , _level: 999,
                _imgURL: "http://www.pngall.com/wp-content/uploads/2016/03/Hulk-PNG.png"},
            {id: 4, _name: "Son Goku"      , _level: 700,
                _imgURL: "http://vignette3.wikia.nocookie.net/vsbattles/images/0/04/Goku_super_saiyan_god_normal_dbz_2013_by_xyelkiltrox-d66znce.jpg/revision/latest?cb=20150803133837"}
        ];

        let items = [
            {id: 1,_itemName: "Schultern des Glücks", _itemType: "Schultern", _heroId: 1 }
        ];
        
         return {heroes, items};
    }
}*/

import {Hero} from "../models/hero/hero.model";
import {Equipment} from "../models/item/equipment.model";
import {Item} from "../models/item/item.model";
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
export var ITEMS: Item[] = [
    {id: 0, _itemName: "Helm der tiefen Erde"           , _itemLevel : 0, _itemType: "Gear", _itemDonned : false, _heroId: 0, _blizzItemIcon: "inv_helmet_leather_raiddruid_k_01", _blizzItemId: 76749}, //standard
    {id: 1, _itemName: "Handwickel der tiefen Erde"     , _itemLevel : 0, _itemType: "Gear", _itemDonned : false, _heroId: 0, _blizzItemIcon: "inv_glove_leather_raiddruid_k_01", _blizzItemId: 76750}, //standard
    {id: 2, _itemName: "Roben der tiefen Erde"          , _itemLevel : 0, _itemType: "Gear", _itemDonned : false, _heroId: 0, _blizzItemIcon: "inv_chest_leather_raiddruid_k_01", _blizzItemId: 76751}, //standard
    {id: 3, _itemName: "Mantelung der tiefen Erde"      , _itemLevel : 0, _itemType: "Gear", _itemDonned : false, _heroId: 0, _blizzItemIcon: "inv_shoulder_leather_raiddruid_k_01", _blizzItemId: 76752}, //standard
    {id: 4, _itemName: "Beinwickel der tiefen Erde"     , _itemLevel : 0, _itemType: "Gear", _itemDonned : false, _heroId: 0, _blizzItemIcon: "inv_pant_leather_raiddruid_k_01", _blizzItemId: 76753} //standard
];

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
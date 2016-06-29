export class DBInMemoryData {
    createDb() {
        /**
         * hero-list.model.ts and hero-list.component.ts are deprecated, because the methods of these classes
         * are unused. We used the hero.service.ts methods now.
         */
        //with hero-list.model
        /*let heroes = new HeroList();
        heroes.addHero(new Hero("Van Helsing", 80));
        heroes.addHero(new Hero("Super Mario", 150));
        heroes.addHero(new Hero("Hulk", 999));
        heroes.addHero(new Hero("Son Goku", 700));
        */

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

        let items = [];
        
         return {heroes, items};
    }
}
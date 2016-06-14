import {Hero} from "./hero.model"
import {HeroList} from "./hero-list.model";

heroList = new HeroList();
heroList.addHero(new Hero("Van Helsing", 80));
heroList.addHero(new Hero("Super Mario", 150));
heroList.addHero(new Hero("Hulk", 999));
heroList.addHero(new Hero("Son Goku", 700));

export var heroList;


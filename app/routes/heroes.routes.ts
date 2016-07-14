import { RouterConfig }                     from '@angular/router';
import { HeroesComponent }                  from '../components/hero/heroes.component';
import { HeroDetailComponent }              from "../components/hero/./hero-detail.component";
import { NewHeroDetailComponent }           from "../components/hero/./new-hero-detail.component";

export const HeroesRoutes: RouterConfig = [
    {path: 'heroes',   component: HeroesComponent},
    {path: 'hero/:id', component: HeroDetailComponent},
    {path: 'newHero',  component: NewHeroDetailComponent}
];
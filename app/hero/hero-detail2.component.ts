import {Component,Input,ChangeDetectionStrategy} from 'angular2/core';
import {Hero} from "./hero";

@Component({
    selector:'comment-section-1',
    template: ` <h1>Hero Details</h1>
                <ul class="items">
                    <li class="items"><label class="badge">ID:      </label>{{privHero.id}}</li>
                    <li class="items"><label class="badge">Name:    </label>{{privHero.name}}</li>
                    <li class="items"><label class="badge">Age:     </label>{{privHero.age}}</li>
                    <li class="items"><label class="badge">Health:  </label>{{privHero.health}}</li>
                </ul>
              `,
    /**
     * short-cuts the observation of any change by giving the ChangeDetectionStrategy the CheckOne enum as method/strategy
     * Therefore it will only check for changes once, obviously
     */
    changeDetection:ChangeDetectionStrategy.CheckOnce })
export class HeroDetail2Component{
    @Input hero:Hero;

    constructor(){
    }
}

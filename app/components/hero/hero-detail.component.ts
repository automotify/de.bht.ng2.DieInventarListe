import {Component, OnInit}      from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Hero}                   from "../../models/hero/hero.model";
import {HeroService}            from "../../services/hero.service";
import {DragulaService}         from "ng2-dragula/ng2-dragula";
import {HeroInventoryComponent} from "../item/inventory.component";

//noinspection JSAnnotator
@Component({
    template: ` 
                <div class="wrapper container">
                    <div *ngIf="hero" id="herodetails">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <h2>{{hero._name | uppercase}} details:</h2>
                                <button class="btn btn-success btn-block" (click)="goBack()">Back</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <ul class="list-group">
                                   <li class="list-group-item">
                                        <h4 class="list-group-item-heading">Name</h4>
                                        <input class="form-control" type="text" [(ngModel)]="hero._name" placeholder="name">
                                   </li>
                                   <li class="list-group-item">
                                        <h4>Level <label class="label label-primary">{{hero._level}}</label></h4>
                                        <button class="btn btn-success btn-lg" (click)="levelUp()">Level UP!</button>
                                   </li>
                                   <li class="list-group-item">
                                        <h4 class="list-group-item-heading">Image</h4>      
                                        <input class="form-control" type="text" [(ngModel)]="hero._imgURL" placeholder="image url">
                                   </li>
                                </ul>
                            </div>
                        </div>
                        <hero-inventory [hero]="hero"></hero-inventory>
                        
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3" *ngIf="!hero" id="noherodetails">
                            <h1>Hero not found!</h1>
                            <button class="btn btn-success btn-block" (click)="goToHeroes()">Heroes</button>
                        </div>
                    </div>
                </div>
                
                
                `,
    //viewProviders: [DragulaService],
    directives: [HeroInventoryComponent],
    precompile: [HeroInventoryComponent]
})

export class HeroDetailComponent implements OnInit {


    private hero:Hero;

    /**
     * create the services
     * @param router
     * @param route
     */
    constructor(private router:Router,
                private route: ActivatedRoute) {
    }

    /**
     * let the Hero Level Up, he should get some new items
     */
    levelUp(){
        this.hero._level += 10;
    }

    /**
     * get the hero with id
     */
    ngOnInit() {
        /*if(+this.routeParams.getParam('id') != null){
         let id = +this.routeParams.getParam('id');
         HeroService.getHero(id)
         .then(hero => this.hero = hero);
         }*/
        var sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            HeroService.getHero(id).then(hero => this.hero = hero)
        });
    }

    /**
     * navigate us to the hero list
     */
    goToHeroes() {
        this.router.navigate(['/heroes']);
    }

    /**
     * navigate back to screen befor
     */
    goBack(){
        window.history.back();
    }

}
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../../models/hero/hero.model";
import {EquipmentComponent} from "./equipment.componnent";
import {BagComponent} from "../item/bag.component";
import {HeroService} from "../../services/hero.service";

//noinspection JSAnnotator
@Component({
    selector : 'my-new-hero-detail',
    template: ` 
                <div class="wrapper container">
                    <div class="row">
                        <div *ngIf="hero">
                            <h2 class="text-center">{{hero._name | uppercase}} details:</h2>
                            <div class="col-md-6 col-md-offset-3">
                                <button class="btn btn-success btn-block" (click)="goBack()">Back</button>
                            </div>
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
                                </li>
                                <li class="list-group-item">
                                    <h4 class="list-group-item-heading">Image</h4>      
                                    <input class="form-control" type="text" [(ngModel)]="hero._imgURL" placeholder="image url">
                                </li>
                            </ul>
                            <div class="col-md-6 col-md-offset-3">
                                <button class="btn btn-success btn-block" (click)="save()">Save</button>
                            </div>
                        </div>
                    </div>
                    <my-equipment [hero]="hero"></my-equipment>
                    <heros-bag [hero]="hero"></heros-bag>
                </div>
                `,
    directives: [EquipmentComponent, BagComponent]
})

export class NewHeroDetailComponent implements OnInit {



    private hero:Hero;

    /**
     * create the services
     * @param router
     * @param heroService
     */
    constructor(
        private router:Router){}

    /**
     * called the hero service and save these data in the db
     */
    private save(){

        HeroService.save(this.hero);

        this.gotoHeroes()

    }

    /**
     * create a new hero
     */
    ngOnInit() {
        this.hero = new Hero();
    }

    /**
     * navigate us to the hero list
     */
    gotoHeroes() {
        this.router.navigate(['/heroes']);
    }

    goBack(){
        window.history.back();
    }
}
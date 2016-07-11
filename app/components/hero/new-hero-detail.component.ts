import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../../models/hero/hero.model";

//noinspection JSAnnotator
@Component({
    selector : 'my-new-hero-detail',
    template: ` <div *ngIf="hero" id="newherodetails">
                 
                    <h2>{{hero._name | uppercase}} details:</h2>
                    <div id="myModal" class="modal" style="display: block">
                    <!-- Modal content -->
                        <div class="modal-content">
                            <div class="modal-header">
                                <!--<span class="close" (click)="modal.emit()">X</span>-->
                                <div class="modal-title">{{hero._name}}</div>
                                <button (click)="goBack()">Back</button>
                                <button (click)="save()">Save</button>
                            </div>
                            <div class="modal-body">
                                <div class="hero-detail">
                                    <ul class="items">
                                        <li class="item"><span class="badge">ID</span>         {{hero.id}}</li>
                                        <li class="item"><span class="badge">Name</span>       <input [(ngModel)]="hero._name" placeholder="name"></li>
                                        <li class="item"><span class="badge">Level</span>      {{hero._level}}</li>
                                        <li class="item"><span class="badge">Image</span>      <input [(ngModel)]="hero._imgURL" placeholder="image url"></li>
                                    </ul>
                                    <my-equipment [hero]="hero"></my-equipment>
                                    <div class="hero-img" >
                                          <img src="{{hero._imgURL}}" width="50%"/>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <heros-bag [hero]="hero"></heros-bag>
                            </div>
                        </div>
                    </div>
                   
                </div>`

})

export class NewHeroDetailComponent implements OnInit {

    private hero:Hero;

    /**
     * create the services
     * @param router
     */
    constructor(
        private router:Router){}

    /**
     * called the hero service and save these data in the db
     */
    private save(){
        /*
        this.heroService.save(this.hero).then(hero => {
            this.hero = hero;
        });

        this.gotoHeroes()
        */
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

    static goBack(){
        window.history.back();
    }
}
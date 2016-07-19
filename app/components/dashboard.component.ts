import { Component, OnInit }    from '@angular/core';

@Component({
    template: `
            <div class="wrapper container">
                <div class="row">
                    <h2 class="text-center">Dashboard</h2>
                    <div class="col-md-8 col-md-offset-2">
                        <h3>
                        Die Inventarliste ist eine Applikation, worin sich eine 
                        fiktive Heldenliste verwalten lässt. Jeder Held hat ein 
                        eigenes Inventar. Diese Applikation bieten die Basis 
                        eines Onlinespiels, in dem man sich einen Helden 
                        erstellen oder vorhandenen Helden benutzen kann. Diese 
                        Helden besitzen eine Tasche/Bag und eine 
                        Ausrüstung / Equipment, zusammengefasst ein Inventar. Die 
                        Tasche sammelt nur Items, während die Ausrüstung nur mit 
                        bestimmten Items ausgestattet werden kann.
                        </h3>
                    </div> 
                </div>
            </div>`
})
export class DashboardComponent implements OnInit {

    constructor(){}

    ngOnInit() {
    }
}
/**
 * Created by Andreas Burger & Daniel Schleußner on 13.07.2016.
 */

import { Directive, ElementRef, Input, HostListener, Renderer } from '@angular/core';
import { QueryList, Query } from '@angular/core';
import { PopoverComponent } from '../components/popover/popover'

@Directive({
    selector: '[popup]',
    inputs: ['name', 'level', 'type', 'donned', 'category', 'value'],
    exportAs: 'popup',
})

export class Popup {
    name    : string;
    level   : number;
    type    : string;
    donned  : boolean;
    category: string;
    value   : number;
    popovers: QueryList<PopoverComponent>;
    popover : PopoverComponent;

    //@Input('title') title: String;

    @HostListener('mouseenter') onMouseEnter() {
        this.displayPopover();
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hidePopover();
    }

    constructor(el: ElementRef, @Query(PopoverComponent) popovers:QueryList<PopoverComponent>, renderer: Renderer) {
        this.popovers = popovers;
        renderer.setElementClass(el.nativeElement, "qs", true);
    }

    ngAfterContentInit() {
        this.popover        = this.popovers.toArray()[0];
        this.popover.name   = this.name;
        this.popover.type   = this.type;
        this.popover.level  = this.level;
        this.popover.donned = this.donned;
        this.popover.category = this.category;
        this.popover.value  = this.value;
    }

    displayPopover(): void {
        this.popover.active = true;
    }

    hidePopover(): void {
        this.popover.active = false;
    }
}

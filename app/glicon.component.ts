import {Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'starr',
    template: `
        <h2>Star</h2>
       <i class="glyphicon"
           [class.glyphicon-star]="isFavorite"
           [class.glyphicon-star-empty]="!isFavorite"
           (click)="onClick()">
       </i>
        `
})

export class GlIconComponent {
    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    };
}

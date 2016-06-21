import {Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'starr',
    templateUrl: 'app/glicon.template.html',
    styles: [`
    .glyphicon-star{
        color: orange;
    }
    `]
})

export class GlIconComponent {
    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    };
}

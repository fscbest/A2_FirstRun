import {Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'heart',
    templateUrl: 'app/heart.template.html',
    styles: [`
    .glyphicon-heart{
        color: #ccc;
        cursor: pointer;
    }
    .highlighted{
        color: deeppink;
    }
    `]
})

export class HeartComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;

    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    };
}
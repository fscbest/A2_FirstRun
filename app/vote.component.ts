import {Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',
    styles: [`
    .vote-all{
        width: 20px;
     }
    .glyphicon-heart{
        color: #ccc;
        cursor: pointer;
    }
    .highlighted{
        color: deeppink;
    }
    `]
})

export class VoteComponent {
    votes = 50;

    onUpClicked(){
        this.votes += 1;
    }

    onDownClicked(){
        this.votes -= 1;
    }
}
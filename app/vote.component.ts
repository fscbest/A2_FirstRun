import {Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',
    styles: [`
    .vote-all{
        width: 20px;
        text-align: center;
        color: #999;
     }
     .glyphicon-menu-cursor{
        cursor: pointer;
     }
    .highlighted{
        color: orange;
    }
    .vote-count{
        font-size: 1.3em;
    }
    `]
})

export class VoteComponent {
    @Input('vote-count') voteCount = 0;
    @Input('my-vote') myVote = 0;
    @Output() change = new EventEmitter();

    onUpClicked(){
        if(this.myVote < 1){
            this.myVote ++;
            this.updateMyVoteFlags();
        }
    }

    onDownClicked(){
        if(this.myVote > -1){
            this.myVote --;
            this.updateMyVoteFlags();
        }
    }

    updateMyVoteFlags(){
        this.change.emit({ newValue: this.myVote });
    }
}
import {Component, Input, Output } from 'angular2/core'
import {TweetComponent} from "./tweet.component";
import {TwitterService} from "./twitter.service";

@Component({
    selector: 'twitter',
    templateUrl: 'app/twitter.template.html',
    directives: [TweetComponent],
    styles: [`
    .twitter{
        width: 400px;
        margin:10px;
    }
    `],
    providers: [TwitterService]
})

export class TwitterComponent {
    tweets = [];

    constructor(twitterService: TwitterService){
        this.tweets = twitterService.getTweets();
    }
}

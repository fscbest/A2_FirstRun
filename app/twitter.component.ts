import {Component, Input, Output } from 'angular2/core'
import {TweetComponent} from "./tweet.component";

@Component({
    selector: 'twitter',
    templateUrl: 'app/twitter.template.html',
    directives: [TweetComponent],
    styles: [`
    .twitter{
        width: 400px;
        margin:10px;
    }
    `]
})

export class TwitterComponent {
    tweet = {
        imageUrl: "http://lorempixel.com/100/100/people/?1",
        authorName: "Sergio",
        handler: "handler",
        message: "message",
        iLike: true,
        totalLikes: 22
    };
}

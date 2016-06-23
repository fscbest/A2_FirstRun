import {Component, Input, Output } from 'angular2/core';
import {HeartComponent} from "./heart.component";

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    directives: [HeartComponent],
    styles: [`
        .handle {
            color: #ccc;
        }

        .media {
            margin-bottom: 20px;
        }

        .media-object {
            border-radius: 3px;
        }
    `],
})

export class TweetComponent {
    @Input('tweet') tweet = {
        imageUrl: "http://lorempixel.com/100/100/people/?1",
        authorName: "author_name",
        handler: "handler",
        message: "message",
        iLike: false,
        totalLikes: 10
    };


}
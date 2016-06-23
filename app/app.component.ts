import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {GlIconComponent} from "./glicon.component";
import {HeartComponent} from "./heart.component";
import {VoteComponent} from "./vote.component";
import {TwitterComponent} from "./twitter.component";
import {ZippyComponent} from "./zippy.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.zipper.template.html',
    directives: [CoursesComponent, AuthorsComponent, GlIconComponent, HeartComponent, VoteComponent, TwitterComponent, ZippyComponent]
})

export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true,
        iLike: false,
        totalLikes: 10
    };

    vote = {
        voteCount: 40,
        myVote: 0
    };

    onVoteChange($event){
        console.log("The vote value is: ", $event.newValue);
        console.log("The total vote count is: ", this.vote.voteCount + $event.newValue);
    }

    onFavoriteChange($event){
        console.log("The isFavorite value is: ", $event.newValue);
    }

    onClick($event){
        $event.stopPropagation();
        console.log("Button press", $event);
    }
}
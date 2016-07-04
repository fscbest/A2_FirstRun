import {Component} from 'angular2/core';
//import {CoursesComponent} from "./courses.component";
//import {AuthorsComponent} from "./authors.component";
//import {GlIconComponent} from "./glicon.component";
//import {HeartComponent} from "./heart.component";
//import {VoteComponent} from "./vote.component";
//import {TwitterComponent} from "./twitter.component";
//import {ZippyComponent} from "./zippy.component";
//import {ContactFormComponent} from "./contact-form.component";
//import {SignUpFormComponent} from './signup-form.component'
import {ChangePasswFormComponent} from './change_passw-form.component'
import {ObbserableComponent} from "./observabble.component";
import {CallSrvComponent} from "./callService.component";
import {AvatarComponent} from "./avatar.component";

@Component({
    selector: 'my-app',
    template: '<avatarr></avatarr>',
    directives: [
        //CoursesComponent, AuthorsComponent, GlIconComponent,
        //HeartComponent, VoteComponent, TwitterComponent, ZippyComponent, ContactFormComponent, SignUpFormComponent,
     ChangePasswFormComponent, ObbserableComponent, CallSrvComponent, AvatarComponent]
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
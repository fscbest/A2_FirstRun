import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {GlIconComponent} from "./glicon.component";
import {HeartComponent} from "./heart.component";
import {VoteComponent} from "./vote.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <vote></vote>
    <starr [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></starr>
    <heart [totalLikes]="post.totalLikes" [iLike]="post.iLike"></heart>
    <button class="btn btn-primary" (click)="onClick($event)">Submit</button>
    `,
    directives: [CoursesComponent, AuthorsComponent, GlIconComponent, HeartComponent, VoteComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true,
        iLike: false,
        totalLikes: 10
    }

    onFavoriteChange($event){
        console.log("The isFavorite value is: ", $event.newValue);
    }

    onClick($event){
        $event.stopPropagation();
        console.log("Button press", $event);
    }
}
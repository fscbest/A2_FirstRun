import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {GlIconComponent} from "./glicon.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <starr [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></starr>
    <button class="btn btn-primary" (click)="onClick($event)">Submit</button>
    `,
    directives: [CoursesComponent, AuthorsComponent, GlIconComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log("The isFavorite value is: ", $event.newValue);
    }

    onClick($event){
        $event.stopPropagation();
        console.log("Button press", $event);
    }
}
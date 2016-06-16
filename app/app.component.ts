import {Component} from 'angular2/core';
import {CourseComponent} from "./course.component";

@Component({
    selector: 'my-app',
    template: '<h1>Hello My First Angular 2 App</h1><courses></courses>',
    directives: [CourseComponent]
})
export class AppComponent { }
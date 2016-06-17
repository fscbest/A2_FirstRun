import {Component} from 'angular2/core'
import {CourseService} from "./course.service";
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
        <h1>Courses</h1>
        {{title}}
        <input type="text" autoGrow>
        <ul>
            <li *ngFor = "#course of courses">
                {{ course }}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CourseComponent {
    title: string = "the title of course page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}


System.register(['angular2/core', "./courses.component", "./authors.component", "./glicon.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, glicon_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (glicon_component_1_1) {
                glicon_component_1 = glicon_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                }
                onFavoriteChange($event) {
                    console.log("The isFavorite value is: ", $event.newValue);
                }
                onClick($event) {
                    $event.stopPropagation();
                    console.log("Button press", $event);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
    <h1>Hello My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <starr [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></starr>
    <button class="btn btn-primary" (click)="onClick($event)">Submit</button>
    `,
                    directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, glicon_component_1.GlIconComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
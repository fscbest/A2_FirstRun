import {Component, Input, Output } from 'angular2/core';

@Component({
    selector: 'zipp',
    template: `
        <div>{{ zipp.title  }}</div>
        `,
    //styles: [`
    //    .handle {
    //        color: #ccc;
    //    }
    //
    //    .media {
    //        margin-bottom: 20px;
    //    }
    //
    //    .media-object {
    //        border-radius: 3px;
    //    }
    //`],
})

export class ZippComponent {
zipp = {
    title: "Zipp title",
    content: "Zipp context"
}


}
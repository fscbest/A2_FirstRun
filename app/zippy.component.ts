import {Component, Input, Output } from 'angular2/core'
import {ZippComponent} from "./zipp.component";
import {ZippyService} from "./zippy.service";

@Component({
    selector: 'zippy',
    //template: `
    //    <ul>
    //        <li *ngFor = "#zipp of zipps">
    //            {{ zipp }}
    //        </li>
    //    </ul>
    //    `
    template: `
        <zipp></zipp>
        `
    directives: [ZippComponent],
    //styles: [`
    //.twitter{
    //    width: 400px;
    //    margin:10px;
    //}
    //`],
    providers: [ZippyService]
})

export class ZippyComponent {
    zipps = [];

    //constructor(zipperService: ZipperService){
    //    this.zipps = zipperService.getZipps();
    //}
}
import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'callsrv',
    templateUrl: 'app/callsrv.template.html',
    providers:[PostService, HTTP_PROVIDERS]
})

export class CallSrvComponent {
    constructor(private _postService: PostService){
        this._postService.getPosts()
            .subscribe((post => console.log(post)));
    }

}
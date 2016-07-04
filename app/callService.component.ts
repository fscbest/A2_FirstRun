import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
    selector: 'callsrv',
    //templateUrl: 'app/callsrv.template.html',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
    `,
    providers:[PostService, HTTP_PROVIDERS]
})

export class CallSrvComponent implements OnInit{
    isLoading = true;

    constructor(private _postService: PostService){
        //this._postService.createPost({userId: 1, title: "a", body: "b"});

    }

    ngOnInit(){
        this._postService.getPosts()
            .then((post => {
                this.isLoading = false;
                console.log(post[0].id)
            }));
    }
}
import {Component, OnInit} from 'angular2/core';
import {AvatarService} from './avatar.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'avatarr',
    styles: [
        `
            .avatar {
                width: 100;
                height: 100;
                border-radius: 100%;
            }
        `
    ],
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h2>@{{ user.login }}</h2>
        <img class="avatar" src="{{ user.avatar_url }}">

        <h3>Followers</h3>
        <div *ngFor="#follower of followers" class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>
    `,
    providers:[AvatarService, HTTP_PROVIDERS]
})

export class AvatarComponent implements OnInit{
    isLoading = true;
    username = "octocat";
    user = {};
    followers = [];

    constructor(private _avatarService: AvatarService){

    }

    ngOnInit(){
        Observable.forkJoin(
            this._avatarService.getUser(this.username),
            this._avatarService.getFollowers(this.username)
            )
            .subscribe(
                res => {
                    this.user = res[0];
                    this.followers = res[1];
                },
                null,
                () => { this.isLoading = false; })
    }
}
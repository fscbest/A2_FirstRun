import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AvatarService{
    private _url = "https://api.github.com/users/";

    userName = "octocat";

    constructor(private _http: Http){

    }
    getUser(username){
        return this._http.get(this._url + username)
            .map(res => res.json());
    }

    getFollowers(username){
        return this._http.get(this._url + username + "/followers")
            .map(res => res.json());
    }
}
import {Component} from 'angular2/core'
import {ControlGroup, FormBuilder} from "angular2/common";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/flatMap';

@Component({
    selector: 'obbserv',
    templateUrl: 'app/obbserv.template.html',
})

export class ObbserableComponent {
    form:ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x));

        var startDates = [];
        var startDate = new Date();

        for(var day = -2; day <= 2; day++){
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }


       /* var observable = Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date " + date);
                return [1, 2, 3];
            });
        observable.subscribe(x => console.log(x));

        var observableTimer = Observable.interval(1000)
            .flatMap(x => {
                console.log("calling server");
                return Observable.of([1,2,3]);
            });
        observableTimer.subscribe(news => console.log(news));
        */






        /*var userStream = Observable.of({
            userId: 1,
            userName: 'mosh'
        }).delay(2000);

        var tweetsStreams = Observable.of([1,2,3]).delay(1500);

        Observable
            .forkJoin(userStream, tweetsStreams)
            .map(joined =>
                new Object({user: joined[0], tweets: joined[1]}))
            .subscribe(result => console.log(result));
            */


        /*var counter = 0;

        var ajaxCall = Observable.of('url')
            .flatMap(() => {
                if(++counter < 2)
                    return Observable.throw(new Error("Request failed."));

                return Observable.of([1,2,31]);
            });

        ajaxCall
            .retry(3)
            .subscribe(
            x => console.log(x),
            error => console.error(error)
        );

        var observable = Observable.throw(new Error("Something failed."));
        observable.subscribe(
            x => console.log(x),
            error => console.error(error)
        );*/



        /*var remoteDataStream = Observable.throw(new Error("Something failed."));

        remoteDataStream
            .catch(err => {
                var localDataStream = Observable.of([1,2,3]);
                return localDataStream;
            })
            .subscribe(x => console.log(x));*/





        var remoteDataStream = Observable.of([1,2,3]).delay(500);

        remoteDataStream
            .timeout(1000)
            .subscribe(x => console.log(x),
                       error => console.log(error),
         () => console.log("completed")
            );


    }


}
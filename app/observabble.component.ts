import {Component} from 'angular2/core'
import {ControlGroup, FormBuilder} from "angular2/common";
import {Observable} from "../node_modules/rxjs/Observable";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

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
    }
}
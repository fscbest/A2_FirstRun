import {Component} from 'angular2/core';
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {PasswordValidators} from "./passwordValidators";

@Component({
    selector: 'change-passw-form',
    templateUrl: 'app/change_passw-form.template.html'
})
export class ChangePasswFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            curr_passw: ['', Validators.compose(
                [Validators.required,
                    PasswordValidators.cannotContainSpace,
                ]),
                PasswordValidators.shouldBeUnique
            ],
            new_password: ['', Validators.compose(
                [Validators.required,
                    PasswordValidators.cannotContainSpace,
                ]),
                PasswordValidators.shouldBeUnique
            ],
            confirm_password: ['', Validators.compose(
                [Validators.required,
                    PasswordValidators.cannotContainSpace,
                ]),
                PasswordValidators.shouldBeUnique
            ]
        }, {validator: PasswordValidators.shouldBeSame});
    }
}

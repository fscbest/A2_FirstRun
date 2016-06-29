import {Control} from "angular2/common";
import {ControlGroup} from "angular2/common";
export class PasswordValidators{
    static cannotContainSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return{cannotContainSpace: true};

        return null;
    }

    static shouldBeSame(group: ControlGroup){
        var newPassw = group.find('new_password');
        var confPassw = group.find('confirm_password');
        if(newPassw.value != confPassw.value ){
            return { shouldBeSame: true };
        }

        return null;
    }

    static shouldBeUnique(control: Control){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value =="rom")
                    resolve({ shouldBeUnique: true });
                else resolve(null);
            }, 1000);
        });
    }
}
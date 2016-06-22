System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let VoteComponent = class VoteComponent {
                constructor() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.change = new core_1.EventEmitter();
                }
                onUpClicked() {
                    if (this.myVote < 1) {
                        this.myVote++;
                        this.updateMyVoteFlags();
                    }
                }
                onDownClicked() {
                    if (this.myVote > -1) {
                        this.myVote--;
                        this.updateMyVoteFlags();
                    }
                }
                updateMyVoteFlags() {
                    this.change.emit({ newValue: this.myVote });
                }
            };
            __decorate([
                core_1.Input('vote-count'), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input('my-vote'), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "change", void 0);
            VoteComponent = __decorate([
                core_1.Component({
                    selector: 'vote',
                    templateUrl: 'app/vote.template.html',
                    styles: [`
    .vote-all{
        width: 20px;
        text-align: center;
        color: #999;
     }
     .glyphicon-menu-cursor{
        cursor: pointer;
     }
    .highlighted{
        color: orange;
    }
    .vote-count{
        font-size: 1.3em;
    }
    `]
                }), 
                __metadata('design:paramtypes', [])
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorService;
    return {
        setters:[],
        execute: function() {
            class AuthorService {
                getAuthors() {
                    return ["Author 1", "Author 2", "Author 3"];
                }
            }
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=author.service.js.map
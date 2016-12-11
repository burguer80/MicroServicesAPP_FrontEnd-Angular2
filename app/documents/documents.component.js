"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My first Doc",
                description: "First description",
                file_url: "file.doc",
                updated_at: "11/11/16",
                image_url: "http://lorempixel.com/output/business-q-g-640-480-5.jpg"
            },
            {
                title: "My second Doc",
                description: "second description",
                file_url: "secondfile.doc",
                updated_at: "11/12/16",
                image_url: "http://lorempixel.com/output/business-q-g-640-480-5.jpg"
            },
            {
                title: "My third Doc",
                description: "third description",
                file_url: "thirdfile.doc",
                updated_at: "11/12/16",
                image_url: "http://lorempixel.com/output/business-q-g-640-480-5.jpg"
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    }),
    __metadata("design:paramtypes", [])
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map
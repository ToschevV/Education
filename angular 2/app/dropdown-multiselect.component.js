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
var core_1 = require('@angular/core');
var wikipedia_service_1 = require('./wikipedia.service');
var forms_1 = require('@angular/forms');
var DropdownMultiComponent = (function () {
    function DropdownMultiComponent(myElement, wikipediaService) {
        this.wikipediaService = wikipediaService;
        this.controlType = 'dropdown';
        this.term = new forms_1.FormControl();
        this.isCollapsed = true;
        // public controlType = 'wikisearch';
        this.query = '';
        this.countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina",
            "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
            "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
            "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
            "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
            "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
        this.filteredList = [];
        this.selectedItem = [];
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }
    DropdownMultiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.wikipediaService.search(term); });
    };
    DropdownMultiComponent.prototype.selectWiki = function (event, item) {
        if (item) {
            this.query = item;
            this.isCollapsed = (!this.isCollapsed);
        }
    };
    DropdownMultiComponent.prototype.filter = function (event) {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                ;
            }.bind(this));
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            }
            else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        }
        else {
            this.filteredList = [];
        }
    };
    DropdownMultiComponent.prototype.select = function (event, item) {
        if (this.controlType == "multiselect") {
            this.selectedItem.push(item);
        }
        this.query = '';
        this.filteredList = [];
        this.selectedIdx = -1;
        event.stopPropagation();
    };
    DropdownMultiComponent.prototype.remove = function (item) {
        this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
    };
    DropdownMultiComponent.prototype.handleBlur = function () {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx - 1];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    };
    DropdownMultiComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
        this.selectedIdx = -1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropdownMultiComponent.prototype, "controlType", void 0);
    DropdownMultiComponent = __decorate([
        core_1.Component({
            selector: 'dropdown-multi',
            host: {
                '(document:click)': 'handleClick($event)',
            },
            templateUrl: 'app/dropdown-multiselect-form.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, wikipedia_service_1.WikipediaService])
    ], DropdownMultiComponent);
    return DropdownMultiComponent;
}());
exports.DropdownMultiComponent = DropdownMultiComponent;
//# sourceMappingURL=dropdown-multiselect.component.js.map
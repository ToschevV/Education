import { Component, NgModule,ElementRef, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'dropdown-multi',
   host: {
        '(document:click)': 'handleClick($event)',
    },
 templateUrl: 'app/dropdown-multi-form.component.html'
})

export class DropdownMultiComponent {
     @Input() controlType = 'dropdown';

    items: Observable<Array<string>>;
    term = new FormControl();
    public isCollapsed = true;
   // public controlType = 'wikisearch';
    public query = '';
    public countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina",
        "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
        "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
        "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
        "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
        "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
    public filteredList = [];
    public elementRef;
    selectedIdx: number;
    public selectedItem = [];

    constructor(myElement: ElementRef, private wikipediaService: WikipediaService) {
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }
    
    ngOnInit() {
    this.items = this.term.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.wikipediaService.search(term));
     }

     selectWiki(event, item: any) {
         if(item){
         this.query=item;
         this.isCollapsed=(!this.isCollapsed);
         }
     }

    filter(event: any) {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;;
            }.bind(this));
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        } else {
            this.filteredList = [];
        }
    }

     select(event,item: any) {
        if(this.controlType == "multiselect"){
            this.selectedItem.push(item);
        }
        
        this.query= this.controlType == "multiselect"
        ? ''
        : item;
        this.filteredList = [];
        this.selectedIdx = -1;
        event.stopPropagation();
    }

    remove(item) {
      this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx-1];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleClick(event) {
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
    }
   
}
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { JsonpModule } from '@angular/http';
import {DropdownMultiComponent} from './dropdown-multi.component';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import { WikipediaService } from './wikipedia.service';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        DropdownMultiComponent
    ],
    providers: [
        WikipediaService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

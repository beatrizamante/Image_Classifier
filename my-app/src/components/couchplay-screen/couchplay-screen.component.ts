import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CardCouchplayComponent } from "../card-couchplay/card-couchplay.component";

@Component({
    selector: 'app-couchplay-screen',
    standalone: true,
    templateUrl: './couchplay-screen.component.html',
    styleUrl: './couchplay-screen.component.css',
    imports: [FooterComponent, CardCouchplayComponent]
})
export class CouchplayScreenComponent {

}

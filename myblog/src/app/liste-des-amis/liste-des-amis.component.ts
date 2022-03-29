import { Component } from '@angular/core';
@Component({
    selector: 'app-liste-des-amis',
    templateUrl: './liste-des-amis.component.html',
    styleUrls: []
})
   export class ListeDesAmisComponent {
    public title = 'ImmoBlog';
    
    public immos: any[] = [
        {
            immoId: 1,
            immoName: 'Immeuble Kassa',
            decription: 'Vue sur ambassade des USA',
            lieu: 'Kobaya',
            price: 265000,
            imageUrl: 'assets/img/1.jpg'
        }, {
            immoId: 2,
            immoName: 'Immeuble Kelitigui',
            decription: 'Vue sur le stade de Nongö',
            lieu: 'Simbaya',
            price: 215000,
            imageUrl: 'assets/img/2.jpg'
        }, {
            immoId: 3,
            immoName: 'Immeuble Magassouba',
            decription: 'sis au quartier Damond Plaza',
            lieu: 'Matam',
            price: 165000,
            imageUrl: 'assets/img/3.jpg'
        }, {
            immoId: 4,
            immoName: 'Immeuble Tchenguel',
            decription: 'Vue sur la lagune',
            lieu: 'Matam',
            price: 245000,
            imageUrl: 'assets/img/4.jpg'
        }, {
            immoId: 5,
            immoName: 'Immeuble Ernesto',
            decription: 'Vue sur la mer',
            lieu: 'Matam',
            price: 261000,
            imageUrl: 'assets/img/5.jpg'
        }
    ];
}


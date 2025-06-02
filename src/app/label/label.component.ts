import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: false,
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {
  @Input() class!: string;//la classe de votre label c'est à vous de le preciser
  @Input() label!: string; //le message/titre de votre label c'est à vous de le preciser
  @Input() color!: string;//la couleur de votre label c'est à vous de le preciser

}

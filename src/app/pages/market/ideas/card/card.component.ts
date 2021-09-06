import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() { }

  chnageStatus(status){
    this.item.selected = status
    console.log(this.item.selected)
  }

}

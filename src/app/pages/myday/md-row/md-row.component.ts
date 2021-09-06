import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-md-row',
  templateUrl: './md-row.component.html',
  styleUrls: ['./md-row.component.scss'],
})
export class MdRowComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() { }

}

import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../interfaces/store';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() store: Store;
  @Input() dayIndex: number;

  showMoreInfo: boolean = false;

  constructor() { }

  ngOnInit() { }

}

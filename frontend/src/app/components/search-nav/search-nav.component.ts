import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '../../interfaces/store';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  @Input() userQuery: string = '';
  @Input() location: string = '';
  @Output() onInput = new EventEmitter<Store>();
  @Output() onQueryChange = new EventEmitter<String>();

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.searchStores();
  }

  searchStores() : void {
    this.onQueryChange.emit(this.userQuery)
    this.backendService.searchStores(this.userQuery, this.location).subscribe(stores => this.onInput.emit(stores))
  }

}

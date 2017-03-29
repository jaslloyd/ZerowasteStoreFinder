import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Store } from '../../interfaces/store';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allStores: Store[] = [];
  constructor(
    private flashMessage: FlashMessagesService,
    private backendService: BackendService,
    private router: Router
  ) { }

  ngOnInit() {
    this.backendService.getAllStores().subscribe(stores => {
      this.allStores = stores;
    });
  }

  deleteStore(storeId, i){
    // Remove element from stores array to show updates...
    this.allStores.splice(i, 1);
    this.backendService.deleteStore(storeId).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Store deleted', {cssClass:'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      }
      else{
        this.flashMessage.show('Deleting store failed', {cssClass:'alert-danger', timeout: 3000});
      }
    });
  }

  updateStore(store, index){
    const updatedStore = store;
    updatedStore.products = (<HTMLInputElement>document.getElementById('products'+index)).value
    console.log(updatedStore);
    this.backendService.editStore(updatedStore).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Store updated', {cssClass:'alert-success', timeout: 3000});
      }else{
        this.flashMessage.show('Store update failed...', {cssClass:'alert-danger', timeout: 3000});
      }
    });
  }

}

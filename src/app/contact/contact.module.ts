import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCntactComponent } from './add-cntact/add-cntact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';



@NgModule({
  declarations: [AddCntactComponent, EditContactComponent, ViewContactComponent, DeleteContactComponent, ListContactComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }

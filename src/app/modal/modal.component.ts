import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public isOpen:boolean=false;

  constructor(private modalService:ModalService) { }

  ngOnInit() {
   this.modalService.registerModal(this);
   console.log(this);
  }

  public closeModal():void{
    this.modalService.close();
    }
 
}

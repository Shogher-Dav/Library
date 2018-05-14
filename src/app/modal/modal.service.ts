import { Injectable } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
@Injectable()
export class ModalService {

    private modal: ModalComponent;

    public registerModal(modalObject: ModalComponent):void {
        this.modal=modalObject;
        console.log(this.modal);
    }
    public open():void{
        this.modal.isOpen=true;

    }
    public close():void{
        this.modal.isOpen=false;

    }

 
}



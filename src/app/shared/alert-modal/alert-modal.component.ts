import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;
  @Input() message2: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}

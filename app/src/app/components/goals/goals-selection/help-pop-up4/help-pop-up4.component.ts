import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-help-pop-up4',
  templateUrl: './help-pop-up4.component.html',
  styleUrls: ['./help-pop-up4.component.css']
})
export class HelpPopUp4Component implements OnInit {

  checked: Boolean = false;

  constructor(public dialogRef: MatDialogRef<HelpPopUp4Component>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  ok(){
    this.dialogRef.close();
    let check = "" + this.checked; 
    localStorage.setItem('checkedStrengthDialog2', check);
  }

  onCheck(){
    this.checked =!this.checked;
    console.log(this.checked);
   
  }
}

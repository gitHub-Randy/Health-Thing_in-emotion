import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-help-pop-up5',
  templateUrl: './help-pop-up5.component.html',
  styleUrls: ['./help-pop-up5.component.css']
})
export class HelpPopUp5Component implements OnInit {

  checked: Boolean = false;

  constructor(public dialogRef: MatDialogRef<HelpPopUp5Component>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  ok(){
    this.dialogRef.close();
    let check = "" + this.checked; 
    localStorage.setItem('checkedStrengthDialog5', check);
  }

  onCheck(){
    this.checked =!this.checked;
    console.log(this.checked);
   
  }
}

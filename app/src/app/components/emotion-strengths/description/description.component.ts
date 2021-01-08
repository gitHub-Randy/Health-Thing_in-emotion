import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { choosenEmotions } from 'src/app/interfaces/chosenEmotions';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  
  description: string;
  emotionName: string;
  formattedstring: string;
  charLimit = 300;

  constructor( public dialogRef: MatDialogRef<DescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private snackbar: MatSnackBar) {
      console.log(data);
      console.log(data.emotion);
      this.description = data.emotion.description;
      this.emotionName = data.emotion.emotionName;
      console.log(this.emotionName);
      this.formattedstring = this.emotionName.toLowerCase();
      console.log(this.formattedstring);
    }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  ok(){
    this.dialogRef.close({ event: 'close', data: this.description});
    this.showSnackBar("beschrijving toegevoegd");
  }

  showSnackBar(message){
    this.snackbar.open(message, "", {
      duration: 1000,
      panelClass: "snackbar2"
    });
  }
}

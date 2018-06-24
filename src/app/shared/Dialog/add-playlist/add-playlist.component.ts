import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss']
})
export class AddPlaylistComponent implements OnInit {

  @Input() _files: File[];

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  constructor(private dialogRef: MatDialogRef<AddPlaylistComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }


  onNativeInputFileSelect($event) {
    this._files = $event.target.files[0];
    console.log(this._files);
  }

  selectFile(){
    this.nativeInputFile.nativeElement.click();

  }

}

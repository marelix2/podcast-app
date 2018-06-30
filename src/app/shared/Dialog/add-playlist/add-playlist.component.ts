import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddPlaylistService} from "../../services/add-playlist.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss']
})
export class AddPlaylistComponent implements OnInit {

  @Input() _files: File[];

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  addPlaylistForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddPlaylistComponent>,
              private formBuilder: FormBuilder,
              private addPlaylistService: AddPlaylistService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.addPlaylistForm = this.addPlaylistFormBuild();
  }

  onNoClick() {
    this.dialogRef.close();
  }


  onNativeInputFileSelect($event) {
    this._files = $event.target.files[0];
    console.log(this._files);
  }

  selectFile() {
    this.nativeInputFile.nativeElement.click();

  }

  addPlaylistFormBuild(): FormGroup {

    return this.formBuilder.group({
      playlistTitle: ['', Validators.required],
      img: [''],
      tracks: [[]],
      uid:[this.loginService.userUid ],
      description: ['']

    });
  }

  onSubmit() {
    this.addPlaylistService.addPlaylist(this.addPlaylistForm.getRawValue());
  }

}

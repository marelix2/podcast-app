import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SearchService} from "../../services/search.service";
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  podcasts: SampleNames[];

  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchForm = this.searchFormBuild();
    this.loadPodcasts();
  }

  searchFormBuild(): FormGroup {
    return this.formBuilder.group({
      search: [null]
    });
  }

  loadPodcasts() {

    this.searchService.loadPodcasts().subscribe(w => {
      this.podcasts = w;
    });
  }

}

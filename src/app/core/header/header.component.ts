import {AfterContentInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SearchService} from "../../shared/services/search.service";
import {LoginService} from "../../shared/services/login.service";
import {Router} from "@angular/router";
import {DisplayPodcastService} from "../../shared/services/display-podcast.service";
import {Observable} from "rxjs/Observable";
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  myControl: FormControl = new FormControl();
  searchForm: FormGroup;
  podcasts: SampleNamesModel[];
  user: UserModel;
  tracks: playlistTracks[];

  filteredOptions: Observable<string[]>;
  treackAuto: string[];


  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService,
              private loginService: LoginService,
              private router: Router,
              private displayPodcastService: DisplayPodcastService) {
  }
  ngOnInit() {
    this.loadUser();
    this.searchForm = this.searchFormBuild();
    this.tracks = new Array<playlistTracks>();
    this.loadPodcasts();


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val)));
  }


  filter(val: string): string[] {
    return this.treackAuto.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


  searchFormBuild(): FormGroup {
    return this.formBuilder.group({
      search: [null]
    });
  }

  loadUser() {

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  loadPodcasts() {

    this.displayPodcastService.loadPlaylists().subscribe(ref => {
      this.tracks = ref;
      this.loadOptions();
    });

  }

  loadOptions(){

    this.treackAuto = this.tracks.map(ref => {
      return ref.title;

    });

  }


  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);

  }

  ngAfterContentInit(): void {

  }




}

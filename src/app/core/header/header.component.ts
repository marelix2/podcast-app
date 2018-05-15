import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SearchService} from "../../shared/services/search.service";
import {LoginService} from "../../shared/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  podcasts: SampleNamesModel[];
  user: UserModel;

  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadUser();
    this.searchForm = this.searchFormBuild();
    this.loadPodcasts();

  }

  searchFormBuild(): FormGroup {
    return this.formBuilder.group({
      search: [null]
    });
  }

  loadUser() {

   this.user =  JSON.parse(localStorage.getItem('user'));
  }

  loadPodcasts() {

    this.searchService.loadPodcasts().subscribe(w => {
      this.podcasts = w;
    });
  }


  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);

  }

}

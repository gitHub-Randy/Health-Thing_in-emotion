import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private tokenStorage: TokenStorageService,private snackbar: MatSnackBar) { }

  headerbackground: string = "headerbackground.png"
  @Input() title: string
  shouldShowMenu: boolean = false;
  menuState: boolean = false
  @Input() hideMenu: boolean
  ngOnInit(): void {
    if (this.title === "Hoi") {
      console.log(this.tokenStorage.getUser().name)
      this.setTitle(`Hoi ${this.tokenStorage.getUser().name},`)
    }
    if (!this.hideMenu) {
      // let doc = document.get("html")[0] as HTMLElement;
      // doc.style.background-image: url(./assets//header/headerbackground.png);

    }
  }

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  showMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
    
  }

  close() {
    this.menuState = !this.menuState
  }

  setBackground(bg){
    this.headerbackground = bg;
  }

  setTitle(t){
    this.title = t;
  }

 comingSoon(){
    this.snackbar.open("Coming soon", "", {
      duration: 1000,
      panelClass: "snackbar"
    });
 }

}

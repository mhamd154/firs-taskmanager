import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  fullName = 'Ibrahim Muhammad'
  sideNavList: any[] = [
    { name: 'All Tasks', icon: 'task', iconActive: 'assets/images/feedactive.svg', route: '/app/tasks' },
    { name: 'Notification', icon: 'notifications', route: '/app/notifications' },
    { name: 'Settings', icon: 'settings', route: '/app/settings' },
  ]

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  getInitials(name: string) {
    var names = name.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  logout(){
    this.app.exit()
  }

}

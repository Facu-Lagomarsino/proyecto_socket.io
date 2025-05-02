import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DrawComponent } from "../draw/draw.component";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  imports: [DrawComponent],
})
export class RoomComponent implements OnInit {
  room: string = ''; // <- inicialización por seguridad

  constructor(
    private router: ActivatedRoute,
    private cookieService: CookieService 
  ) {}

  ngOnInit(): void {
    this.room = this.router.snapshot.paramMap.get('room') || ''; // <- inicialización por seguridad
    this.cookieService.set('room', this.room); 
    console.log(this.room); 
  }
}

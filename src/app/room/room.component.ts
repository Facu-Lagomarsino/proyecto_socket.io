import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'] // <- corregido
})
export class RoomComponent implements OnInit {
  room: string = ''; // <- inicialización por seguridad

  constructor(private router: ActivatedRoute,
    private cookieService: CookieService // <- corregido
  ) {}

  ngOnInit(): void {
    this.room = this.router.snapshot.paramMap.get('room') || ''; // <- inicialización por seguridad
  }
}

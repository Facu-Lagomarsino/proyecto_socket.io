import { Injectable } from '@angular/core';
import { WebSocket } from 'ws'; // Importar la clase WebSocket de la biblioteca ws

@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends WebSocket {

  constructor() {
    super({
      url: '' // Cambia la URL según tu servidor WebSocket
      // protocols: ['protocolOne', 'protocolTwo'] // Cambia los protocolos según tus necesidades
    }); // Cambia la URL según tu servidor WebSocket
   }
}

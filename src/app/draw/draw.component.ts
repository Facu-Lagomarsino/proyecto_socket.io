import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, AfterViewInit {

  // Propiedades públicas
  public width: number = 800;
  public height: number = 500;

  @ViewChild('canvasRef', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  // Propiedades privadas
  private cx!: CanvasRenderingContext2D;
  private points: Array<{ x: number, y: number }> = [];
  private isDrawing: boolean = false;

  // Ciclo de vida
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.render();
  }

  // Listeners
  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent): void {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.isDrawing = true;
    this.cx.beginPath();
    this.cx.moveTo(x, y);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDrawing = false;
    this.cx.closePath();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.isDrawing) return;

    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= this.width && y >= 0 && y <= this.height) {
      this.points.push({ x, y }); // Guarda cada punto
      console.log(this.points); // Muestra los puntos en la consola

      this.write(x, y);  // Sigue dibujando
    }
  }

  // Métodos privados
  private render(): void {
    const canvas = this.canvasRef.nativeElement;
    this.cx = canvas.getContext('2d')!;

    if (!this.cx) {
      throw new Error('No se pudo obtener el contexto 2D del canvas');
    }

    canvas.width = this.width;
    canvas.height = this.height;

    this.cx.fillStyle = '#515151';
    this.cx.fillRect(0, 0, this.width, this.height);

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#121212';

    this.writeSingle(100, 100);
  }

  private write(x: number, y: number): void {
    this.cx.lineTo(x, y);
    this.cx.stroke();
  }

  private writeSingle(x: number, y: number): void {
    this.cx.beginPath();
    this.cx.moveTo(x, y);
    this.cx.lineTo(x, y);
    this.cx.stroke();
    this.cx.closePath();
  }
}

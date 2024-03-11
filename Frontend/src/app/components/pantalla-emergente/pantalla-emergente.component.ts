import { Component , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router'


@Component({
  selector: 'app-pantalla-emergente',
  templateUrl: './pantalla-emergente.component.html',
  styleUrls: ['./pantalla-emergente.component.css']
})
export class PantallaEmergenteComponent {

  constructor(
    private dialogRef: MatDialogRef<PantallaEmergenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  redirigirAOtroComponente() {
    this.router.navigate(['/agregar-actor']);
    this.cerrarDialogo();
  }

  cerrarDialogo() {
    this.dialogRef.close();
  }
}

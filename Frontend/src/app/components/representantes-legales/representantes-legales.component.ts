import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-representantes-legales',
  templateUrl: './representantes-legales.component.html',
  styleUrls: ['./representantes-legales.component.css']
})
export class RepresentantesLegalesComponent {
  constructor(private router: Router) { }

  tableHeaders = ['Nombre/Razon Social', 'Tipo de ID', 'Numero de Identificación', 'Nacionalidad'];
  tableData: any[] = [];

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.addRow();
    }
  }

  addRow() {
    const newRow: { [key: string]: string } = {};
    this.tableHeaders.forEach(header => {
      newRow[header] = '';
    });
    this.tableData.push(newRow);

    if (this.tableData.length % 4 === 0) {
      this.addRow();
    }
  }


  submitForm() {
    console.log('Formulario enviado');
  }

  onGuardarContinuarClick() {
    this.router.navigate(['/inicio']);
  }

}

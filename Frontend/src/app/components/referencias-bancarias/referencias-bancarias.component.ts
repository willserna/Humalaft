import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referencias-bancarias',
  templateUrl: './referencias-bancarias.component.html',
  styleUrls: ['./referencias-bancarias.component.css']
})
export class ReferenciasBancariasComponent {
  constructor(private router: Router) { }

  tableHeaders = ['Banco / Nombre', 'Direccion / Ciudad', 'Telefono / Fax'];
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

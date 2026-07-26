import { Component, OnInit } from '@angular/core';
import { ClienteServicio } from '../../servicios/cliente.service';
import { Cliente } from '../../modelo/cliente.modelo';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit{

  // Lo inicializamos para evitar problemas al acceder a .length en el componente
  clientes: Cliente[] = []; 

  constructor(private clientesServicio: ClienteServicio){}

  ngOnInit(){
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach( cliente => {
        if (cliente.saldo !== undefined) {
          saldoTotal += cliente.saldo;
        }
      });
    }
    return saldoTotal;
  }
}

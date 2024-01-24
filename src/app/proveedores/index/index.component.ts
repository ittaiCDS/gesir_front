import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  proveedores:Proveedor[] = []
  constructor(public proveedorService:ProveedorService){}

  ngOnInit(){
    this.proveedorService.getAll().subscribe((data:Proveedor[]) =>{
      this.proveedores = data
      console.log(this.proveedores)
    })
  }

  deleteProveedor(id:number){
    this.proveedorService.delete(id).subscribe(res => {
      this.proveedores = this.proveedores.filter(item=>item.id ! == id);
      alert('Proveedor Eliminado con exito');
    })
  }

}

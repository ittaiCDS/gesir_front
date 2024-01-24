import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id!:number;
  proveedor!:Proveedor;

  constructor(public proveedorService:ProveedorService, private router:Router, 
    private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['postId'];
    this.proveedorService.find(this.id).subscribe((data:Proveedor) =>{
      this.proveedor = data;
    })
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!:number;
  proveedor!:Proveedor;
  form!:FormGroup;

  constructor(public proveedorService:ProveedorService, private router:Router,
    private route:ActivatedRoute){}
  
  ngOnInit():void{
      this.id = this.route.snapshot.params['postId']
      this.proveedorService.find(this.id).subscribe((data:Proveedor)=>{
        this.proveedor = data
    });
  
      this.form = new FormGroup({
        clave: new FormControl('', [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        estado: new FormControl('', [Validators.required]),
        estatus: new FormControl('', [Validators.required])
      });
    }
  
    get f(){
      return this.form.controls;
    }
  
    submit(){
      console.log(this.form.value)
      this.proveedorService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Proveedor Actualizado con exito');
        this.router.navigateByUrl('post/index');
      })
    }

}

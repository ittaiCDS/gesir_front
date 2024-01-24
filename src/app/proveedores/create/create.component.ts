import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!:FormGroup;

  constructor( public proveedorService:ProveedorService, private router:Router){}

  ngOnInit():void{
    this.form = new FormGroup({
      clave: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      estatus: new FormControl('', [Validators.required])
      
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value)
    this.proveedorService.create(this.form.value).subscribe((res:any) => {
      alert('Proveedor Creado con exito');
      this.router.navigateByUrl('post/index');
    })
  }


}

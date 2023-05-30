import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Categoria } from 'src/app/modelos/Categoria';
import { CategoriaService } from 'src/app/servicio/categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categorias?:Categoria[];

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
        data=>{
          this.categorias=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        }

    );
  }

  nuevaC():void{
    this.router.navigate(['nuevaCategoria'])
  }
  
  editarC(categoria:Categoria):void{
    localStorage.setItem("id",categoria.id.toString());
    this.router.navigate(['editarCategoria']);
  }

  eliminarC(categoria:Categoria):void{
    this.categoriaService.deleteCategoria(categoria).subscribe(data=>{
      this.categorias=this.categorias!.filter(e=>e!==categoria);
    });
  }

}

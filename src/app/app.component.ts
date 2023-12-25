import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy{


  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>
  itemParaSerEditado!: Item

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage()
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: Number) {
    const index = this.listaDeCompra.findIndex((item) => item.id === id);

    this.listaDeCompra.splice(index, 1);
  }

  limparLista(): void {
    this.listaDeCompra = []
  }

  ngOnDestroy(): void {
      //realiza logica de limpeza logo antes do componente ser destruído
  }
}

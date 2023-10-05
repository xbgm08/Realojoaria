import { Component } from '@angular/core';
import { Produto } from './cesta.model';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {
  produtos: Produto[] = []; 

  total: number = this.calcularTotal();

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.quantidade * produto.preco, 0);
  }

  adicionarItem(): void {
    const novoProduto = { id: this.produtos.length + 1, nome: 'Novo Produto', quantidade: 1, preco: 15 };
    this.produtos.push(novoProduto);
    this.atualizarTotal();
  }

  removerItem(index: number): void {
    this.produtos.splice(index, 1);
    this.atualizarTotal();
  }

  aumentarQuantidade(produto: Produto): void {
    produto.quantidade++;
    this.atualizarTotal();
  }

  diminuirQuantidade(produto: Produto): void {
    if (produto.quantidade > 1) {
      produto.quantidade--;
      this.atualizarTotal();
    }
  }

  atualizarTotal(): void {
    this.total = this.calcularTotal();
  }
  
  limparCesta(): void {
    this.produtos = []; 
    this.atualizarTotal();
  }
  
  finalizarCompra(): void {
    // Futuro...
  }
}

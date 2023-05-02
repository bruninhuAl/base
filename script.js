// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        this.nome = nome;
        this.data_de_cadastro = data_de_cadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    metodos(){
        return this.nome + this.data_de_cadastro + this.descricao + this.preco
    }
}

const produto = new Produto("Bruno", "06-06-21", "Fortnite player", "100,00");
console.log(produto.metodos())

class Produtos_Destaques extends Produto{
    constructor(nome, data_de_cadastro, descricao, preco, imagemDestaque){
        super(nome, data_de_cadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
    }

    mostrarProdutosDestaque(){
        return this.nome + this.data_de_cadastro + this.descricao + this.preco + this.imagemDestaque;
    }
}

const produtos_Destaques = new Produtos_Destaques("Bruno", "06-06-21", "Fortnite player", "100,00", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t8ou6kjvuJFkHRfBH2KipmH8O2_BBWnRY9FOL194bq6JTNKFyfYOa9p5IFPpnf7gm6c&usqp=CAU");
console.log(produtos_Destaques.mostrarProdutosDestaque())
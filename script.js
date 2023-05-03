// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    metodos(){
        return this.nome + this.dataCadastro + this.descricao + this.preco
    }
}

const produto = new Produto("Bruno", "06-06-21", "Fortnite player", "100,00");
console.log(produto.metodos())

class ProdutosDestaques extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque){
        super(nome, dataCadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
    }

    mostrarProdutosDestaque(){
        return `
            <h1>${this.nome}</h1>
            <div>${this.dataCadastro}</div>
            <p>${this.descricao}</p>
        `
        //return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
    }
}

const produtos_Destaques = new ProdutosDestaques("Xbox", "06-05-21", "Console", "R$2120,00", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t8ou6kjvuJFkHRfBH2KipmH8O2_BBWnRY9FOL194bq6JTNKFyfYOa9p5IFPpnf7gm6c&usqp=CAU");


const produtoDestaque = document.getElementById("produto-destaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produtos_Destaques.mostrarProdutosDestaque());

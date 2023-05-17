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

const produto = new Produto("Xbox", "06-05-21", "Console", "R$2120,00");
console.log(produto.metodos())

class ProdutosDestaques extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque){
        super(nome, dataCadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
    }

    mostrarProdutosDestaque(){
        return `
            <h1>${this.nome}</h1>
            <img src="${this.imagemDestaque}">
            <div>${this.dataCadastro}</div>
            <p>${this.descricao}</p>
        `
        //return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
    }
}

const produtos_Destaques = new ProdutosDestaques("Xbox", "06-05-21", "Console", "R$2120,00", "https://assets.xboxservices.com/assets/c7/46/c7465321-acbb-4e4f-9376-cd6005165d0e.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png");


const produtoDestaque = document.getElementById("produto-destaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produtos_Destaques.mostrarProdutosDestaque());

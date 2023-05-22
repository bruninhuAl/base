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
            <img src="${this.imagemDestaque}" style="height: 250px">
            <div>${this.dataCadastro}</div>
            <p>${this.descricao}</p>
        `
        //return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
    }
}

const produtos_Destaques = new ProdutosDestaques("Xbox", "06-05-21", "Console", "R$2120,00", "https://assets.xboxservices.com/assets/c7/46/c7465321-acbb-4e4f-9376-cd6005165d0e.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png");


const produtoDestaque = document.getElementById("produto-destaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produtos_Destaques.mostrarProdutosDestaque());







class ProdutosdaLista extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque, titulo1, descricao1, preco1, titulo2, descricao2, preco2, titulo3, descricao3, preco3){
        super(nome, dataCadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
        this.titulo1 = titulo1;
        this.descricao1 = descricao1;
        this.preco1 = preco1;
        this.titulo2 = titulo2;
        this.descricao2 = descricao2;
        this.preco2 = preco2;
        this.titulo3 = titulo3;
        this.descricao3 = descricao3;
        this.preco3 = preco3;
    }

    mostrarListaProduto(){
        return `
        <div class="grid-container">
        <div class="grid-item">
        <h3>${this.titulo1 = titulo1}</h3>
        <p>${this.descricao1 = descricao1}</p>
        <p>${this.preco1 = preco1}</p>
        </div>
        <div class="grid-item">
        <h3>${this.titulo2 = titulo2}</h3>
        <p>${this.descricao2 = descricao2}</p>
        <p>${this.preco2 = preco2}</p>
        </div>
        <div class="grid-item">
        <h3>${this.titulo3 = titulo3}</h3>
        <p>${this.descricao3 = descricao3}</p>
        <p>${this.preco3 = preco3}</p>
        </div>
      </div>
      
        `
        //return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
    }
}

const produtosLista = new ProdutosdaLista("Xbox", "06-05-21", "Console", "R$2120,00", "https://assets.xboxservices.com/assets/c7/46/c7465321-acbb-4e4f-9376-cd6005165d0e.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png", "xbox", "video game", "R$ 99,00", "ps5", "video game", "R$ 100,00", "nintendo", "video game", "R$ 50,00");


const listaProdutos = document.getElementById("lista-produtos");
listaProdutos.insertAdjacentHTML('afterbegin', produtosLista.mostrarListaProduto());

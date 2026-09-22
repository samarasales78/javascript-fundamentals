const produtos = new Map();

//1. cadastrar um produto
function cadastrar(codigo, nome, preco, quantidade) {
    try {
        if (produtos.has(codigo)) {
            throw new Error("Código já cadastrado.");
        }

        if (quantidade < 0) {
            throw new Error("Quantidade não pode ser negativa.");
        }

        if (preco <= 0) {
            throw new Error("Preço deve ser maior que zero.");
        }

        produtos.set(codigo, {
            codigo,
            nome,
            preco,
            quantidade
        });

        console.log("Produto cadastrado!");
    } catch (erro) {
        console.log(erro.message);
    }
}

//2. consultar um produto pelo código
function consultar(codigo) {
    try {
        if (!produtos.has(codigo)) {
            throw new Error("Produto não encontrado.");
        }

        console.log(produtos.get(codigo));
    } catch (erro) {
        console.log(erro.message);
    }
}

//3. alterar a quantidade em estoque
function alterarQuantidade(codigo, quantidade) {
    try {
        if (quantidade < 0) {
            throw new Error("Quantidade não pode ser negativa.");
        }

        produtos.get(codigo).quantidade = quantidade;
    } catch (erro) {
        console.log(erro.message);
    }
}

//4. alterar o preço de um produto
function alterarPreco(codigo, preco) {
    try {
        if (preco <= 0) {
            throw new Error("Preço deve ser maior que zero.");
        }

        produtos.get(codigo).preco = preco;
    } catch (erro) {
        console.log(erro.message);
    }
}

//5. remover um produto
function remover(codigo) {
    if (produtos.has(codigo)) {
        produtos.delete(codigo);
        console.log("Produto removido!");
    }
}

//6. verificar se determinado produto está cadastrado
function verificar(codigo) {
    console.log(produtos.has(codigo));
}

//7. exibir todos os produtos cadastrados
function exibirTodos() {
    console.log(produtos);
}


// Testes
cadastrar(1, "Notebook", 3500, 5);
cadastrar(2, "Mouse", 80, 10);

consultar(1);

alterarQuantidade(1, 8);
alterarPreco(1, 3200);

verificar(2);

remover(2);

exibirTodos();
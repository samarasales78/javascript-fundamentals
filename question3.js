const produtos = [
    { codigo: 1, nome: "Teclado", preco: 100, quantidade: 5 },
    { codigo: 2, nome: "Mouse", preco: 50, quantidade: 20 },
    { codigo: 3, nome: "Monitor", preco: 800, quantidade: 8 },
    { codigo: 4, nome: "Fone", preco: 150, quantidade: 15 },
    { codigo: 5, nome: "Webcam", preco: 250, quantidade: 3 }
];

// listar produtos com menos de 10 unidades em estoque
const produtosPoucoEstoque = produtos.filter(produto => produto.quantidade < 10);

// listar apenas o nome dos produtos
const nomesProdutos = produtos.map(produto => produto.nome);

// buscar por código
const buscarProduto = produtos.find(produto => produto.codigo === 3);

// produtos com desconto de 10%
const produtosComDesconto = produtos.map(produto => {
    return {
        ...produto,
        preco: produto.preco * 0.9
    }
})

// calcular total de cada produto
const totalPorProduto = produtos.map(produto => {
    return {
        ...produto,
        total: produto.preco * produto.quantidade
    }
})

// calcular o valor total do estoque
const totalEstoque = produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);

// verificar se tem algum sem estoque
const semEstoque = produtos.some(produto => produto.quantidade === 0);

// verificar se todos tem preço maior que 0
const todosMaiorQueZero = produtos.every(produto => produto.preco > 0);

// resultados
console.log("Produtos com estoque menor que 10:", produtosPoucoEstoque);
console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produto com código 3:", buscarProduto);
console.log("Produtos com desconto:", produtosComDesconto);
console.log("Total por produto:", totalPorProduto);
console.log("Valor total do estoque:", totalEstoque);
console.log("Tem algum produto sem estoque?", semEstoque);
console.log("Todos os produtos têm preço maior que 0?", todosMaiorQueZero);
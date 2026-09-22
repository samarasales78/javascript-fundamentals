class Livro {
  constructor(codigo, titulo, autor, anoPublicacao) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = true;
  }
}

class Biblioteca {
  constructor() {
    this.acervo = new Map();
  }

  cadastrarLivro(codigo, titulo, autor, anoPublicacao) {
    if (this.acervo.has(codigo)) {
      throw new Error(`Código "${codigo}" já cadastrado.`);
    } else {
      this.acervo.set(codigo, new Livro(codigo, titulo, autor, anoPublicacao));
    }
  }

  consultarLivro(codigo) {
    if (!this.acervo.has(codigo)) {
      throw new Error(`Livro "${codigo}" não encontrado.`);
    } else {
      return this.acervo.get(codigo);
    }
  }

  listarTodos() {
    for (const livro of this.acervo.values()) {
      console.log(`${livro.codigo} - ${livro.titulo} - ${livro.autor} - ${livro.anoPublicacao} - ${livro.disponivel ? "Disponível" : "Emprestado"}`);
    }
  }

  listarDisponiveis() {
    for (const livro of this.acervo.values()) {
      if (livro.disponivel) {
        console.log(`${livro.codigo} - ${livro.titulo} - ${livro.autor} - ${livro.anoPublicacao} - Disponível`);
      }
    }
  }

  emprestarLivro(codigo) {
    const livro = this.consultarLivro(codigo);
    if (!livro.disponivel) {
      throw new Error(`Livro "${codigo}" já está emprestado.`);
    } else {
      livro.disponivel = false;
    }
  }

  devolverLivro(codigo) {
    const livro = this.consultarLivro(codigo);
    if (livro.disponivel) {
      throw new Error(`Livro "${codigo}" já está disponível.`);
    } else {
      livro.disponivel = true;
    }
  }

  removerLivro(codigo) {
    if (!this.acervo.has(codigo)) {
      throw new Error(`Livro "${codigo}" não encontrado.`);
    } else {
      this.acervo.delete(codigo);
    }
  }
}
const biblioteca = new Biblioteca();
biblioteca.cadastrarLivro("001", "O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
biblioteca.cadastrarLivro("002", "1984", "George Orwell", 1949);

console.log("Todos os livros:");
biblioteca.listarTodos();

try {
  biblioteca.emprestarLivro("001");
  console.log("\nLivro 001 emprestado.");
} catch (erro) {
  console.log(erro.message);
}

console.log("\nLivros disponíveis:");
biblioteca.listarDisponiveis();

try {
  biblioteca.emprestarLivro("001");
} catch (erro) {
  console.log("\n" + erro.message);
}

biblioteca.devolverLivro("001");
console.log("\nLivro 001 devolvido.");

try {
  biblioteca.removerLivro("999");
} catch (erro) {
  console.log("\n" + erro.message);
}
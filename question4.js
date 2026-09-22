// ===== Classe Funcionario =====
class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`)
        console.log(`Cargo: ${this.cargo}`);
    }

    calcularBonus() {
        return this.salario * 0.10;
    }

    calcularSalarioFinal() {
        return this.salario + this.calcularBonus();
    }
}

// ===== Classe Professor =====
class Professor extends Funcionario {
    calcularBonus() {
        return this.salario * 0.20;
    }
}
// ===== Classe Programador =====
class Programador extends Funcionario {
    calcularBonus() {
        return this.salario * 0.15;
    }
}


//Criando dois funcionarios comuns
const funcionario1 = new Funcionario(
    "Carlos",
    2500,
    "Assistente Administrativo"
);
const funcionario2 = new Funcionario(
    "Mariana",
    3200,
    "Analista"
);

// Criando um Professor e um Programador
const professor1 = new Professor(
    "João",
    5000, 
    "Professor"
);
const programador1 = new Programador(
    "Lucas",
    6000,
    "Programador"
);

// Função para exibir os resultados
function exibirResultado(funcionario) {
    funcionario.exibirDados();

    console.log(`Bônus: R$ ${funcionario.calcularBonus().toFixed(2)}`);
    console.log(`Salário final: R$ ${funcionario.calcularSalarioFinal().toFixed(2)}`);
    console.log("-----------------------------------")
}

// Exibindo os dados de cada funcionário
exibirResultado(funcionario1);
exibirResultado(funcionario2);
exibirResultado(professor1);
exibirResultado(programador1);

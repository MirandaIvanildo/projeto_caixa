
let saldoAtual = 100.00; // Saldo inicial fictício
let transacoes = []; // Lista de transações

function inicio() {
  let nome = prompt("Digite seu nome:");
  console.log(`Olá ${nome}, é um prazer ter você por aqui!`);

  let senha = prompt("Digite sua senha:");
  if (senha === "3589") {
    menu();
  } else {
    console.log("Senha incorreta. Tente novamente.");
    inicio();
  }
}

function menu() {
  console.log("===== MENU =====");
  console.log("1. Saldo");
  console.log("2. Extrato");
  console.log("3. Saque");
  console.log("4. Depósito");
  console.log("5. Transferência");
  console.log("6. Sair");

  let opcao = parseInt(prompt("Escolha uma opção:"));
  escolha(opcao);
}

function escolha(opcao) {
  switch (opcao) {
    case 1:
      saldo();
      break;
    case 2:
      extrato();
      break;
    case 3:
      saque();
      break;
    case 4:
      deposito();
      break;
    case 5:
      transferencia();
      break;
    case 6:
      sair();
      break;
    default:
      erro();
  }
}

function saldo() {
  let senha = prompt("Digite sua senha:");
  if (senha === "3589") {
    console.log(`Saldo atual: R$${saldoAtual.toFixed(2)}`);
  } else {
    console.log("Senha incorreta. Tente novamente.");
    saldo();
  }
}

function extrato() {
  let senha = prompt("Digite sua senha:");
  if (senha === "3589") {
    console.log("===== Extrato =====");
    for (let transacao of transacoes) {
      console.log(`${transacao.tipo}: R$${transacao.valor.toFixed(2)}`);
    }
  } else {
    console.log("Senha incorreta. Tente novamente.");
    extrato();
  }
}

function saque() {
  let senha = prompt("Digite sua senha:");
  if (senha === "3589") {
    let valor = parseFloat(prompt("Digite o valor do saque:"));
    if (valor > 0) {
      if (valor <= saldoAtual) {
        saldoAtual -= valor;
        console.log("Saque realizado com sucesso.");
        transacoes.push({ tipo: "Saque", valor });
      } else {
        console.log("Operação não autorizada. Saldo insuficiente.");
      }
    } else {
      console.log("Operação não autorizada. Valor inválido.");
    }
  } else {
    console.log("Senha incorreta. Tente novamente.");
    saque();
  }
}

function deposito() {
  let senha = prompt("Digite sua senha:");
  if (senha === "3589") {
    let valor = parseFloat(prompt("Digite o valor do depósito:"));
    if (valor > 0) {
      let numeroConta = prompt("Digite o número da conta de destino:");
      saldoAtual += valor;
      console.log("Depósito realizado com sucesso.");
      console.log(`Número da conta: ${numeroConta}`);
      transacoes.push({ tipo: "Depósito", valor });
    } else {
      console.log("Operação não autorizada. Valor inválido.");
    }
  } else {
    console.log("Senha incorreta. Tente novamente.");
    deposito();
  }
}

function transferencia() {
  let senha = prompt("Digite sua senha:");
  if (senha === "3589") {
    // Implementação da transferência
  } else {
    console.log("Senha incorreta. Tente novamente.");
    transferencia();
  }
}

function sair() {
  let nome = prompt("Digite seu nome:");
  console.log(`${nome}, foi um prazer ter você por aqui!`);
}

function erro() {
  console.log("Opção inválida. Tente novamente.");
  menu();
}

inicio();

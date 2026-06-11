// Saldo inicial simulado
let balance = 100000;

const balanceEl = document.getElementById("balance");
const formDepositoEl = document.getElementById("formDeposito");

// Mostrar saldo inicial en el DOM
balanceEl.textContent = balance.toLocaleString("es-CL");

formDepositoEl.addEventListener("submit", function(event) {
    event.preventDefault();

    const montoInput = document.getElementById("monto");
    let monto = Number(montoInput.value);

    if (isNaN(monto) || monto < 500) {
        alert("Ingresa un monto válido mayor o igual a $500.");
        return;
    }

    balance += monto;
    balanceEl.textContent = balance.toLocaleString("es-CL");

    alert(`Depósito realizado: $ ${monto.toLocaleString("es-CL")}.\nSaldo actualizado: $ ${balance.toLocaleString("es-CL")}.`);

    formDepositoEl.reset();
});
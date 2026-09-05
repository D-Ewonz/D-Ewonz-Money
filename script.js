let balance = 245500;
let income = 150000;
let expenses = 82450;

function addIncome() {
    let amount = prompt("Enter income amount:");

    if (amount && !isNaN(amount) && Number(amount) > 0) {
        amount = Number(amount);

        income += amount;
        balance += amount;

        updateDashboard();
    }
}

function addExpense() {
    let amount = prompt("Enter expense amount:");

    if (amount && !isNaN(amount) && Number(amount) > 0) {
        amount = Number(amount);

        expenses += amount;
        balance -= amount;

        updateDashboard();
    }
}

function updateDashboard() {
    document.getElementById("balance").textContent =
        "Rs. " + balance.toLocaleString();

    document.getElementById("income").textContent =
        "Rs. " + income.toLocaleString();

    document.getElementById("expenses").textContent =
        "Rs. " + expenses.toLocaleString();
}

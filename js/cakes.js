let insufficientFundsAlert = document.getElementById("insufficient-funds-alert");

class Cake {
    name;
    price;

    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

    purchase = function()
    {
        insufficientFundsAlert.innerHTML = 
        "Usted ha adquirido: " + this.name;
        insufficientFundsAlert.style.color = "green";
    }
}
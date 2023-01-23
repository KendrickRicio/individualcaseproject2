let total = 0;
let shipData;
loadData();

function updateTotal() {
    total = 0;
    let checkboxes = document.getElementsByName("ship");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            total += parseInt(checkboxes[i].value);
        }
    }
    document.getElementById("total").innerHTML = total;
}

function loadData() {
    console.log(shipCosts);
    shipData = JSON.parse(shipCosts);
    let form = document.getElementById("shipForm");
    for (var ship in shipData) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "ship";
        checkbox.value = shipData[ship].price;
        form.appendChild(checkbox);
        form.innerHTML += ship + " (" + shipData[ship].price + " AUEC)<br>";
        form.addEventListener("click", function(event) {
            if (event.target.type === "checkbox") {
                updateTotal();
            }
        });
    };
}
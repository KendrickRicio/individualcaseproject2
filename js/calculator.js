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
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/ships.json', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status === 200) {
            shipData = xhr.response;
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
        } else {
            console.error(xhr.statusText);
        }
    };
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };
    xhr.send();
}
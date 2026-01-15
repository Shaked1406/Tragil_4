function selectOption(choice) {
    const psychometric = document.getElementById("psychometric");
    const mechina = document.getElementById("mechina");

    if (choice === "bp") {
        mechina.disabled = true;
        mechina.value = "";
        psychometric.disabled = false;
    }

    if (choice === "bm") {
        psychometric.disabled = true;
        psychometric.value = "";
        mechina.disabled = false;
    }
}

function validate() {
    const bagrut = document.getElementById("bagrut").value;
    const age = document.getElementById("age").value;
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";
    resultDiv.className = "";

    if (bagrut === "") {
        alert("You should enter a bagrut grade");
        return;
    }

    if (age > 30) {
        resultDiv.innerText =
            "You are eligible for admission to any faculty you choose";
        resultDiv.className = "green";
    }
}

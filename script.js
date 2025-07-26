function submit() {
    let show = document.querySelector(".answer");
    let number = document.querySelector("#number").value;
    let num = parseInt(number);
    //factorial
    if (num >= 0 && num <= 99999999) {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        show.innerText = fact;
    }else if (num > 99999999) {
        show.innerText = "Infinity";
    }
}

function clearResult() {
    let show = document.querySelector(".answer");
    let input = document.getElementById("number");
    input.value = "";
    show.innerText = " ";
}

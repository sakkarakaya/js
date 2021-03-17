

document.getElementById("btn1").addEventListener("click", function () {
    const n1 = document.getElementById("inp1").value;
    const n2 = document.getElementById("inp2").value;
    if(isNaN(n1) || isNaN(n2))
        return alert("only number");
    const result = parseInt(n1) + parseInt(n2);
    document.getElementById("res").innerHTML = result;
}
)
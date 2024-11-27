function scrollto(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#Sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#nos")

    console.log("go to up")
})
document.querySelector("#Servico").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#Serv")

    console.log("go to up")
})
document.querySelector("#Depoimentos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#Clientes")

    console.log("go to up")
})
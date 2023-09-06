
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const ordem = []; //declara um vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault();


    const nome = frm.nmr.value;
    ordem.push(nome);
    console.log(ordem);

    ordem.sort();

    let lista = "";

    for (let i = 0; i < ordem.length; i++) {
      lista += `${i + 1}. ${ordem[i]}\n`;
    }

    respLista.innerText = lista;
    frm.nmr.value = "";
    frm.nmr.focus();
})

numero.sort(function(a,b) {
    return a.nmr > b.nmr;
});
console.log(nmr);

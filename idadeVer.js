addEventListener('change', anoNasc);

function retBtn() {
    var ano = document.getElementById('year').value;
    var idade = 2021 - ano;
    var foto = document.getElementById('photo');
    var masc = document.getElementById('he');
    var fem = document.getElementById('she');
    var resp = document.getElementById('msgReturn');

    if (ano <= 1902 || ano > 2021) return window.alert("Ano de Nascimento fora dos padrões.");
    resp.style.textAlign = 'center'
    //homemPossibilidade
    if (idade > 0 & idade <= 4 & masc.checked) return resp.innerHTML = `Detectamos um homem de ${idade} anos`,
        foto.src = "img/bebeHomem.jpg";
    if (idade > 5 & idade <= 15 & masc.checked) return resp.innerHTML = `Detectamos um homem de ${idade} anos`,
        foto.src = "img/criancaHomem.jpg";
    if (idade > 15 & idade <= 25 & masc.checked) return resp.innerHTML = `Detectamos um homem de ${idade} anos`,
        foto.src = "img/jovemHomem.jpg";
    if (idade > 25 & idade <= 50 & masc.checked) return resp.innerHTML = `Detectamos um homem de ${idade} anos`,
        foto.src = "img/adultoHomem.jpg";
    if (idade > 50 & idade <= 120 & masc.checked) return resp.innerHTML = `Detectamos um homem de ${idade} anos`,
        foto.src = "img/idosoHomem.jpg";
    //mulherPossibilidade
    if (idade > 0 & idade <= 4 & fem.checked) return resp.innerHTML = `Detectamos uma Mulher de ${idade} anos`,
        foto.src = "img/bebeMulher.jpg";
    if (idade > 5 & idade <= 15 & fem.checked) return resp.innerHTML = `Detectamos uma Mulher de ${idade} anos`,
        foto.src = "img/criancaMulher.jpg";
    if (idade > 15 & idade <= 25 & fem.checked) return resp.innerHTML = `Detectamos uma Mulher de ${idade} anos`,
        foto.src = "img/jovemMulher.jpg";
    if (idade > 25 & idade <= 50 & fem.checked) return resp.innerHTML = `Detectamos uma Mulher de ${idade} anos`,
        foto.src = "img/adultoMulher.jpg";
    if (idade > 50 & idade <= 117 & fem.checked) return resp.innerHTML = `Detectamos uma Mulher de ${idade} anos`,
        foto.src = "img/idosoMulher.jpg";
    if (idade > 117 & idade <= 1200 & fem.checked) return resp.innerHTML = `Detectamos uma Mulher de ${idade} anos`,
        foto.src = "img/charles.jpg";
}

document.getElementById('nome', 'desc').onkeydown = (e) => { if (e.code === "Enter") addLivro(document.getElementById('nome', 'desc')) };

var count = 0;
function addLivro(nomel, descl) {
    
    if (!nome.value.length) {
        alert('Adicione um texto pf :)');
        return;
    }
    const livro = document.getElementById('livro');
    const novoLivro = document.createElement('div');
    novoLivro.innerHTML = ` <p><div class='bloco'><p> <input type = "file" accept = "image / *" name = "image" id = "file" onchange = "loadFile (event)" style = "display: none;"> </p>
    <p> <label for = "file" style = "cursor: pointer;"> Carregar imagem </label> </p>
    <p> <img id = ${count} width = "200" /> </p>
    <h2>${nome.value}</h2> <p>${desc.value}</p>
        <button class="bRm" onclick="rmLivro(this)">Remover Livro</button>
        <button type="button" onclick="compraLivro()"> COMPRAR </button>   
    </p> 
</div>`;
    nome.value = '';
    desc.value = '';
    livro.appendChild(novoLivro);
}

function rmLivro(elemento) {
    elemento.parentElement.remove();
}

function compraLivro(){
    alert("livro comprado");
};

var loadFile = function (event) {
	var image = document.getElementById (count);
	image.src = URL.createObjectURL (event.target.files [0]);
    count++;
};

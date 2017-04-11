// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let botoesExpand = document.querySelectorAll('.botao-expandir-retrair');

for(let botao of botoesExpand){
	botao.addEventListener('click', function(e){
		if(botao.parentNode.classList.contains('expandido')){
			botao.parentNode.classList.remove('expandido');
			botao.innerHTML = "+";
		} else{
			botao.parentNode.classList.add('expandido');
			botao.innerHTML = "-";
		}

	});
}

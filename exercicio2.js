// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let iterador = 0
let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');

proximo.addEventListener('click', function(e){
		if(iterador<todasAsImagens.lengtn()){
			iterador++;
			proximo.parentNode.firstChild.src = servidorDasImagens + todasAsImagens[iterador];
		}
	});

anterior.addEventListener('click', function(e){
		if(iterador>0){
			iterador--;
			anterior.parentNode.firstChild.src = servidorDasImagens + todasAsImagens[iterador];
		}
	});

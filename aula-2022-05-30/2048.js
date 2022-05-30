$(document).keyup(function(e){
	if(e.code == "ArrowUp"){
		let celula = randomizeCelula();
		$(celula).html(randomizeValorEntreDoisQuatro());
	}else if(e.code == "ArrowDown"){
		let celula = randomizeCelula();
		$(celula).html(randomizeValorEntreDoisQuatro());
	}else if(e.code == "ArrowLeft"){
		let celula = randomizeCelula();
		$(celula).html(randomizeValorEntreDoisQuatro());
	}else if(e.code == "ArrowRight"){
		let celula = randomizeCelula();
		$(celula).html(randomizeValorEntreDoisQuatro());
	}
});

function randomizeCelula(){
	const linha = Math.floor(Math.random()*4)+1;
	const coluna = Math.floor(Math.random()*4)+1;
	if($("#l" + linha + "c" + coluna).html() == ""){
		return "#l" + linha + "c" + coluna;
	}
	return randomizeCelula();
}

function randomizeValorEntreDoisQuatro(){
	if(Math.random()>= 0.9){
		return 4;
	}else{
		return 2;
	}
}
let matriz = [
	[2,0,8,0],
	[2,0,0,16],
	[0,4,0,0],
	[16,4,8,16]
]

$(document).keyup(function(e){
	if(e.code == "ArrowUp"){
		moveParaCima();
		randomizeCelula();
		mostraDadosNaTabela();
	}else if(e.code == "ArrowDown"){
		randomizeCelula();
		mostraDadosNaTabela();
	}else if(e.code == "ArrowLeft"){
		randomizeCelula();
		mostraDadosNaTabela();
	}else if(e.code == "ArrowRight"){
		randomizeCelula();
		mostraDadosNaTabela();
	}
});

function moveParaCima(){
	linha1Coluna1 = matriz[0][0];
	linha2Coluna1 = matriz[1][0];
	linha3Coluna1 = matriz[2][0];
	linha4Coluna1 = matriz[3][0];
	
	for(let i = 0; i<3;i++){
		for(let linha = 0; linha < 4; linha++){
			for(let coluna = 0; coluna < 4; coluna++){
				if(linha > 0){
					if(matriz[linha - 1][coluna] == 0){
						matriz[linha - 1][coluna] = matriz[linha][coluna];
						matriz[linha][coluna] = 0;
					}if(matriz[linha - 1][coluna] == matriz[linha][coluna]){
						matriz[linha - 1][coluna] *= 2;
						matriz[linha][coluna] = 0;
					}
				}
			}
		}
	}
	
}
function mostraDadosNaTabela(){
	let tabuleiro = $("#tabuleiro");
	tabuleiro.html("");
	let strLinha = "";
	matriz.forEach(function(linha){
		strLinha += "<tr>";
		linha.forEach(function(coluna){
			strLinha += "<td>"+coluna+"</td>";
		});
		strLinha += "</tr>";
	});
	tabuleiro.append(strLinha);
}

function randomizeCelula(){
	const linha = Math.floor(Math.random()*4);
	const coluna = Math.floor(Math.random()*4);
	if(matriz[linha][coluna] == 0){
		matriz[linha][coluna] = randomizeValorEntreDoisQuatro();
		return;
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
//randomizeCelula();
//randomizeCelula();
mostraDadosNaTabela();
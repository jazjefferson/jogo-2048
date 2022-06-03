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
		moveParaBaixo();
		randomizeCelula();
		mostraDadosNaTabela();
	}else if(e.code == "ArrowLeft"){
		randomizeCelula();
		mostraDadosNaTabela();
	}else if(e.code == "ArrowRight"){
		moveParaDireita();
		//randomizeCelula();
		//mostraDadosNaTabela();
	}
});

function moveParaCima(){
	move();	
}

function moveParaBaixo(){
	inverterVerticalmente();
	move();
	inverterVerticalmente();
}

function moveParaDireita(){
	var matrizInvertida = matriz;
	
	for(let linha = 0; linha < 4; linha++){
		for(let coluna = 0; coluna < 4; coluna++){
			matrizInvertida[coluna][linha] = 0;
		}
	}
	for(let linha = 0; linha < 4; linha++){
		for(let coluna = 0; coluna < 4; coluna++){
			matrizInvertida[linha][coluna] = matriz[linha][coluna];
		}
	}
	console.log(matrizInvertida);
}

function transformaLinhaEmColuna(){
	var matrizInvertida = matriz;
	
	for(let linha = 0; linha < 4; linha++){
		for(let coluna = 0; coluna < 4; coluna++){
			matrizInvertida[linha][coluna]
		}
	}
	console.log(matrizInvertida);
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

function inverterVerticalmente(){
	matrizInversa = [];
	for(let i = 3; i >= 0; i--){
		matrizInversa.push(matriz[i])
	}
	matriz = matrizInversa;
}

function move(){
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


//randomizeCelula();
//randomizeCelula();
mostraDadosNaTabela();
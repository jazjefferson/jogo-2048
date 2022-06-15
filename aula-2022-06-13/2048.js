let matriz = [
	[2,8,512,2],
	[4,128,4,2],
	[16,64,8,8],
	[2,16,2,2]
]
let jogoFinalizado = false;
matriz = matrizZerada();

$(document).keyup(function(e){
	if(jogoFinalizado){
		return;
	}
	if(e.code == "ArrowUp"){
		moveParaCima();
		randomizeCelula();
		mostraDadosNaTabela();
		vefificaGameOver();
	}else if(e.code == "ArrowDown"){
		moveParaBaixo();
		randomizeCelula();
		mostraDadosNaTabela();
		vefificaGameOver();
	}else if(e.code == "ArrowLeft"){
		moveParaEsquerda();
		randomizeCelula();
		mostraDadosNaTabela();
		vefificaGameOver();
	}else if(e.code == "ArrowRight"){
		moveParaDireita();
		randomizeCelula();
		mostraDadosNaTabela();
		vefificaGameOver();
	}
});

function vefificaGameOver(){
	let matrizOriginal = geraNovaMatrizCopiandoDados(matriz);
	
	moveParaCima();
	let paraCima = matrizesIguais(matrizOriginal, matriz);
	
	moveParaBaixo();
	let paraBaixo = matrizesIguais(matrizOriginal, matriz);
	
	moveParaDireita();
	let paraDireita = matrizesIguais(matrizOriginal, matriz);
	
	moveParaEsquerda();
	let paraEsquerda = matrizesIguais(matrizOriginal, matriz);
	
	if(!paraCima || !paraBaixo || !paraDireita || !paraEsquerda){
		matriz = geraNovaMatrizCopiandoDados(matrizOriginal);
		return;
	}
	jogoFinalizado = true;
	$("#gameover").show();
}

function moveParaCima(){
	move();	
}

function moveParaBaixo(){
	inverterVerticalmente();
	move();
	inverterVerticalmente();
}

function moveParaDireita(){	
	let matrizInvertida = transformaLinhaEmColuna(matriz);
	
	matriz = geraNovaMatrizCopiandoDados(matrizInvertida);
	
	moveParaBaixo();
	
	matrizInvertida = transformaLinhaEmColuna(matriz);
	
	matriz = geraNovaMatrizCopiandoDados(matrizInvertida);
	
}

function moveParaEsquerda(){	
	let matrizInvertida = transformaLinhaEmColuna(matriz);
	
	matriz = geraNovaMatrizCopiandoDados(matrizInvertida);
	
	moveParaCima();
	
	matrizInvertida = transformaLinhaEmColuna(matriz);
	
	matriz = geraNovaMatrizCopiandoDados(matrizInvertida);
	
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

randomizeCelula();
randomizeCelula();
mostraDadosNaTabela();
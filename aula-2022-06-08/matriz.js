function geraNovaMatrizCopiandoDados(matriz){
	let novaMatriz = matrizZerada();
	for(let linha = 0; linha < 4; linha++){
		for(let coluna = 0; coluna < 4; coluna++){
			novaMatriz[linha][coluna] = matriz[linha][coluna];
		}
	}
	return novaMatriz;
}

function transformaLinhaEmColuna(matriz){
	let novaMatriz = matrizZerada();
	
	for(let linha = 0; linha < 4; linha++){
		for(let coluna = 0; coluna < 4; coluna++){
			novaMatriz[linha][coluna] = matriz[coluna][linha];
		}
	}
	return novaMatriz;
}

function matrizZerada(){
	return [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
}

function inverterVerticalmente(){
	matrizInversa = [];
	for(let i = 3; i >= 0; i--){
		matrizInversa.push(matriz[i])
	}
	matriz = matrizInversa;
}
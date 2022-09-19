var nome = prompt("Digite seu nome:");
		var peso = parseFloat(prompt("Digite seu peso em kg:"));
		var altura = parseFloat(prompt("Digite sua altura em metros:"));
		imc = peso / (altura*altura)

		if(imc < 18.5){
			document.write(nome + "<p> Você está abixo de seu peso<p>")
		}else if(imc > 18.5 && imc < 25){
			document.write(nome + "<p> Você está saldavel<p>")
		}else if(imc > 25 && imc < 30){
			document.write(nome + "<p> Você está com sobrepeso<p>")
		}else if(imc > 30 && imc < 35){
			document.write(nome + "<p> Você está com obesidade grau 1<p>")
		}else if(imc > 35 && imc < 40){
			document.write(nome + "<p> Você está com obesidade grau 2<p>")
		}else if(imc > 40){
			document.write(nome + "<p> Você está com obesidade grau 3<p>")
		}
		    document.write("Seu IMC é de: " + imc)
		
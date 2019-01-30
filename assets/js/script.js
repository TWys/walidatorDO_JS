document.getElementById("walidate").addEventListener("click", walidateFunction);

function walidateFunction() {
	var nrDO;
	var wynik;
	var suma;
	var nrDO_tab =[];
	
	nrDO = document.getElementById("nrDO").value;
	nrDO_tab = Array.from(nrDO);
	
	
	if (nrDO.length != 9) {
		printResult(0);
		return;
	}
	
	for (i=0;i<3;i++) {
		// Zamiana ewnetualnych małych liter na wielkie
		if (nrDO_tab[i].charCodeAt(0) > 60 || nrDO_tab[i].charCodeAt(0) < 123){
			nrDO_tab[i] = nrDO_tab[i].toUpperCase();
		}
		// Sprawdzenie czy 3 pierwsze znaki to litery
		if (nrDO_tab[i].charCodeAt(0) < 65 || nrDO_tab[i].charCodeAt(0) > 90) {
			printResult(0);
			return;
		}
	}
	
	// DODAĆ SPRAWDZENIE CYFR
	for (i=3;i<9;i++) {
		// sprawdzenie czy znaki 4-9 to cyfry i jeśli tak to zmiana ich typu na int
		if (isNaN(parseInt(nrDO_tab[i]))){
			printResult(0);
			return;
		}
		else {
			nrDO_tab[i] = parseInt(nrDO_tab[i]);
		}
	}
	
	// Obliczenie i sprawdzenie sumy kontrolnej
	suma = (parseInt(nrDO_tab[0].charCodeAt())-55)*7+(parseInt(nrDO_tab[1].charCodeAt())-55)*3+(parseInt(nrDO_tab[2].charCodeAt())-55)+nrDO_tab[3]*9+nrDO_tab[4]*7+nrDO_tab[5]*3+nrDO_tab[6]+nrDO_tab[7]*7+nrDO_tab[8]*3;
	
	if (suma%10 != 0) {
		printResult(0);
		return;
	}
	else {
		printResult(1);
	}	
}

function printResult(result) {
	
	if (result == 0) {
		wynik = "Numer nieprawidłowy";
		document.querySelector('.result_box').style.color = "red";
	}
	else if (result == 1) {
		wynik = "Numer prawidłowy";
		document.querySelector('.result_box').style.color = "green";
	}
	document.querySelector('.result_box').innerHTML = wynik;
	document.querySelector('.result_box').style.display = "block";
}

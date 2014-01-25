$(document).ready(function(){
	
	$('#login').inputFocus('show', {inputText: "Podaj login"}).dlugoscLoginu();
	$('#imie').inputFocus('show', {inputText: "Podaj imię"}).nazwa();
	$('#nazwisko').inputFocus('show', {inputText: "Podaj nazwisko"}).nazwa();
	$('#wiek').inputFocus('show', {inputText: "Podaj wiek"}).age();
	$('#kod').inputFocus('show', {inputText: "Podaj kod pocztowy"}).kodpocztowy();
	$('#email').inputFocus('show', {inputText: "Podaj email"}).email();
	// chaining example
	//$('#wiek').inputFocus('showColor').css({'background-color': 'green'});
	
	$('input[type="button"]').wprowadzanie();
});
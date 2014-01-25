(function($){
	//-----------Obsluga dlugosci loginu
	$.fn.dlugoscLoginu = function(){
				$(this).focus(function(){
					dl = $(this);
					minlength = 6;
					maxlength = 20;
					
					if(dl.val() != 0){
						if(dl.val().length >= minlength){
							dl.next().remove();
							dl.css('border-color', 'green');
							dl.after('<span>Login prawidłowy</span>');
						}else{
							dl.next().remove();
							dl.css('border-color', 'orange');
							dl.after('<span>Za mało znaków</span>');
						}
						if(dl.val().length >= maxlength){
							dl.next().remove();
							dl.css('border-color', 'red');
							dl.after('<span>Za dużo znaków, skróć login</span>');
						}
					}else{
						dl.css('border-color', '');
						dl.next().remove();
						dl.after('<span>' +minlength+ ' znaków wymaganych!</span>');
					}
				}).keyup(function(){
					if(dl.val() != 0){
						if(dl.val().length >= minlength){
							dl.next().remove();
							dl.css('border-color', 'green');
							dl.after('<span>Login prawidłowy</span>');
						}else{
							dl.next().remove();
							dl.css('border-color', 'orange');
							dl.after('<span>Za mało znaków</span>');
						}
						if(dl.val().length >= maxlength){
							dl.next().remove();
							dl.css('border-color', 'red');
							dl.after('<span>Za dużo znaków, skróć login</span>');
						}
					}else{
						dl.css('border-color', '');
						dl.next().remove();
						dl.after('<span>' +minlength+ ' znaków wymaganych!</span>');
					}
				}).blur(function(){
					dl.css('border-color', '');
					dl.next().remove();
				});
		};
	//-----------------Obsluga emaila
	$.fn.email = function(){
		
		function ValidEmail(emailAddress) {
		    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		    return pattern.test(emailAddress);
		}
		
		$(this).focus(function(){
			email = $(this);
			var email_val = $(this).val();
			
			if(email_val != 0)
	        {
	            if(ValidEmail(email_val))
	            {
	            	email.next().remove();
	            	email.css('border-color', 'green');
	            } else {
	            	email.next().remove();
	            	email.css('border-color', 'red');
	            	email.after('<span>Błedny email. Popraw lub uzupełnij.</span>');
	            }
	        }else{
	        	email.next().remove();
				email.css('border-color', '');
				email.after('<span>Wprowadź prawidłowy email: nazwa@xx.xx</span>');
			}
		}).keyup(function(){
			var email_val = $(this).val();

			if(email_val != 0)
	        {
	            if(ValidEmail(email_val))
	            {
	            	email.next().remove();
	            	email.css('border-color', 'green');
	            	email.after('<span>Email prawidłowy</span>');
	            } else {
	            	email.next().remove();
	            	email.css('border-color', 'red');
	            	email.after('<span>Błedny email. Popraw lub uzupełnij.</span>');
	            }
	        }else{
	        	email.next().remove();
				email.css('border-color', '');
				email.after('<span>Wprowadź prawidłowy email: nazwa@xx.xx</span>');
			}
		}).blur(function(){
			email.css('border-color', '');
			email.next().remove();
		});
	};
	//-----------Obsluga Pełnego imienia
	$.fn.nazwa = function(){
		
		function ValidFullName(FullName) {
		    var pattern = new RegExp("^[a-zA-Z ]+$");
		    return pattern.test(FullName);
		}
		
		$(this).focus(function(){
			fn = $(this);
			var fn_val = $(this).val();
			
			if(fn_val != 0)
	        {
	            if(ValidFullName(fn_val))
	            {
	            	fn.next().remove();
	            	fn.css('border-color', 'green');
	            } else {
	            	fn.next().remove();
	            	fn.css('border-color', 'red');
	            	fn.after('<span>Użyto niedozwolonych znaków. Tylko litery.</span>');
	            }
	        }else{
	        	fn.next().remove();
				fn.css('border-color', '');
			}
		}).keyup(function(event){
			var fn_val = $(this).val();
			var box = event.target;
		    var start = box.selectionStart;
		    var end = box.selectionEnd;
		    
	        fn.val(fn_val.replace(/^(.)|(\s|\-)(.)/g, function($1) {
	            return $1.toUpperCase();
	        }));
	        box.setSelectionRange(start, end);
			
			if(fn_val != 0)
	        {
	            if(ValidFullName(fn_val))
	            {
	            	fn.next().remove();
	            	fn.css('border-color', 'green');
	            	fn.after('<span>Prawidłowo</span>');
	            } else {
	            	fn.next().remove();
	            	fn.css('border-color', 'red');
	            	fn.after('<span>Użyto niedozwolonych znaków. Tylko litery.</span>');
	            }
	        }else{
	        	fn.next().remove();
				fn.css('border-color', '');
			}
		}).blur(function(){
			fn.css('border-color', '');
			fn.next().remove();
		});

	};
	//---------------Obsługa wieku
	$.fn.age = function(){
		
		function ValidAge(Age) {
		    var pattern = new RegExp("^[0-9]+$");
		    return pattern.test(Age);
		}
		
		$(this).focus(function(){
			ag = $(this);
			var ag_val = $(this).val();
			
			if(ag_val != 0)
	        {
	            if(ValidAge(ag_val))
	            {
	            	ag.next().remove();
	            	ag.css('border-color', 'green');
	            } else {
	            	ag.next().remove();
	            	ag.css('border-color', 'red');
	            	ag.after('<span>Użyto niedozwolonych znaków. Tylko cyfry.</span>');
	            }
	        }else{
	        	ag.next().remove();
				ag.css('border-color', '');
				ag.after('<span>Wprowadź prawidłowy wiek</span>');
			}
		}).keyup(function(){
			var ag_val = $(this).val();
			
			if(ag_val != 0)
	        {
	            if(ValidAge(ag_val))
	            {
	            	ag.next().remove();
	            	ag.css('border-color', 'green');
	            	ag.after('<span>Prawidłowo wiek</span>');
	            } else {
	            	ag.next().remove();
	            	ag.css('border-color', 'red');
	            	ag.after('<span>Użyto niedozwolonych znaków. Tylko cyfry.</span>');
	            }
	        }else{
	        	ag.next().remove();
				ag.css('border-color', '');
				ag.after('<span>Wprowadź prawidłowy wiek</span>');
			}
		}).blur(function(){
			ag.css('border-color', '');
			ag.next().remove();
		});
	};
	//---------------Obsługa kodu pocztowego
	$.fn.kodpocztowy = function(){
		
		function ValidZip(ZipCode) {
		    var pattern = new RegExp("^([0-9]{2}-[0-9]{3})$");
		    return pattern.test(ZipCode);
		}
		
		$(this).focus(function(){
			zc = $(this);
			var zc_val = $(this).val();
			
			if(zc_val != 0)
	        {
	            if(ValidZip(zc_val))
	            {
	            	zc.next().remove();
	            	zc.css('border-color', 'green');
	            } else {
	            	zc.next().remove();
	            	zc.css('border-color', 'red');
	            	zc.after('<span>Wprowadzono błędny kod. Popraw go.</span>');
	            }
	        }else{
	        	zc.next().remove();
				zc.css('border-color', '');
				zc.after('<span>Wprowadź prawidłowy kod pocztowy: xx-xxx</span>');
			}
		}).keyup(function(){
			var zc_val = $(this).val();
			
			if(zc_val != 0)
	        {
	            if(ValidZip(zc_val))
	            {
	            	zc.next().remove();
	            	zc.css('border-color', 'green');
	            	zc.after('<span>Prawidłowy kod pocztowy</span>');
	            } else {
	            	zc.next().remove();
	            	zc.css('border-color', 'red');
	            	zc.after('<span>Wprowadzono błędny kod. Popraw go.</span>');
	            }
	        }else{
	        	zc.next().remove();
				zc.css('border-color', '');
				zc.after('<span>Wprowadź prawidłowy kod pocztowy: xx-xxx</span>');
			}
		}).blur(function(){
			zc.css('border-color', '');
			zc.next().remove();
		});
	};
	//---------Wprowadzanie danych
	$.fn.wprowadzanie = function(){
		
		$(this).hover(function(){
			$(this).css('background-color', '#F02311');
		}, function(){
			$(this).css('background-color', '#F38630');
		}
		);
		
		$(this).click(function(){
			var login = $('#login').val();
			var imie = $('#imie').val();
			var nazwisko = $('#nazwisko').val();
			var wiek = $('#wiek').val();
			var kod = $('#kod').val();
			var email = $('#email').val();
			
			if($('#wynik').html() === ''){
				if(
						login != '' && login != 'Podaj login' && imie != '' && imie != 'Podaj imię'
						&& nazwisko != '' && nazwisko != 'Podaj nazwisko' && wiek != '' && wiek != 'Podaj wiek'
						&& kod != '' && kod != 'Podaj kod pocztowy' && email != '' && email != 'Podaj email'
					){
						$('#wynik').html(
								'Login: ' +login+ '<br />Imię: ' +imie+ '<br />Nazwisko: ' +nazwisko+
								'<br />Wiek: ' +wiek+ '<br />Kod pocztowy: ' +kod+ '<br />Email: ' +email
						);
					}
			}else {
				$('#wynik').html('');
				
				if($('#wynik').html() === ''){
					if(
							login != '' && login != 'Podaj login' && imie != '' && imie != 'Podaj imię'
							&& nazwisko != '' && nazwisko != 'Podaj nazwisko' && wiek != '' && wiek != 'Podaj wiek'
							&& kod != '' && kod != 'Podaj kod pocztowy' && email != '' && email != 'Podaj email'
						){
							$('#wynik').html(
									'Login: ' +login+ '<br />Imię: ' +imie+ '<br />Nazwisko: ' +nazwisko+
									'<br />Wiek: ' +wiek+ '<br />Kod pocztowy: ' +kod+ '<br />Email: ' +email
							);
						}
				}
			}
		});
	};
})(jQuery);
var url = 'https://restcountries.eu/rest/v1/name/';
var url1 = 'https://restcountries.eu/rest/v2/currency/';
var countriesList = $('#countries');

$('#search').click(searchCountries); // podpięcie żądania pod przycisk o id search

function searchCountries() {
 	var countryName = $('#country-name').val();  // pobiera wartość wpisaną przez użytkownika 
if(!countryName.length) countryName = 'Poland';	 // i przypisuje do zmiennej dzięki metodzie val();
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) { 	// parametr (resp) jest obiektem JSON, który przesyła do tej funkcji metoda .ajax()
  countriesList.empty();    		//metoda empty(); czyści listę krajów po poprzednim zapytaniu
  resp.forEach(function(item) { 	// metoda .forEach ma za zadanie przeiterować po każdym elemencie tablicy !	
  		$('<li class="country"></li>').text(item.name).appendTo(countriesList);  // Tworzymy nowy element listy, ustawiamy jego tekst z elementów z listy i dodajemy do HTMLa 
		$('<li>').text("Capital: " + item.capital).appendTo(countriesList);
		$('<li>').text("Language(s) : " + item.languages).appendTo(countriesList);
		$('<li>').text("Currency : " + item.currencies).appendTo(countriesList);
		$('<li>').text("Population : " + item.population).appendTo(countriesList);
		$('<li>').text("Borders : " + item.borders).appendTo(countriesList);
     if (item.borders == 0){ 
        console.log("Kaine grenzen");
     }

	});
}

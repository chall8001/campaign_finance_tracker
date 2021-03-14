Papa.parse('crp.csv', {
	complete: function(results) {
		console.log(results);
	}
});


// $('#add-city').on('click', function(event){
//     event.preventDefault();
//     var input = $('#city-input').val()
//     console.log(input)
// })

// var queryURL = 'https://www.opensecrets.org/api/?method=candContrib&cid=N00001971&cycle=2020&apikey=74061eb284d7d0766c70019e5ddd2ba5'

// $.ajax({

//     url: queryURL,
//     method: 'GET'

// }).then(function (response) {

//     console.log(response)

//     });
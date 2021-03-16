console.log("hello world")

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


$(document).ready(function(){
// Get value on button click and show alert
$("#myBtn").click(function(){
const str = $("#myInput").val();
const obj = {
  test: str,
}
console.log(str)
console.log(obj)


fetch('/api/person', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(obj),
})
  .then((res) => res.json())

})

})



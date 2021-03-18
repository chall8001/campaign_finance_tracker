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
// const array2 = [""]
const str = $("#myInput").val();
var res = str.split(" ")
// array2.push(res)
// array2.splice(0, 0, array2[1])
// console.log(array2)


// var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr = arr2.splice(0, arr2.indexOf('c'));


const obj = {
  name: str,
}
// console.log(str)
// console.log(obj)


fetch('/api/person', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(obj),
}).then((res) => console.log(res))

})
})


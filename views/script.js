$(document).ready(function(){

 function createClear(){
  if (typeof btn2 == 'undefined') {
    // the variable is defined

  let btn2 = $("<button>").attr("id", "btn2").text("clear") 
  $("#main").append(btn2)
    $("#btn2").click(function(){
      location.reload()
    })  
  } else { console.log("there is already a button")}
 } 

// Get value on button click and show alert
$("#myBtn").click(function(){

let str = $("#myInput").val();


let check = str.split("")
let special = ["!","`",",",".","?"]
for (i = 0; i < check.length; i++) { 
  if (check[i] == special[0] 
    || check[i] == special[1]
    || check[i] == special[2]
    || check[i] == special[3]
    || check[i] == special[4]) {
    console.log("invalid charachters")
    let warning = $("<p>").attr("class","card-text").text("Please Enter a Name Using the Correct Format")
    $("#main").append(warning)
    createClear()
    return
   

  }
}


let splitStr = str.split(" ")
let reversed = splitStr.reverse()
const obj = {
  name: `${reversed[0]}, ${reversed[1]}`
}

console.log(reversed)

fetch('/api/person', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(obj),
})
.then(function(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
})
.then((response) => response.json())
.then((data) => {
  console.log(data[0].CID);
  const cid = data[0].CID 
  const apiKey = "74061eb284d7d0766c70019e5ddd2ba5"
  const queryURL = `https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&cycle=2020&apikey=${apiKey}&output=json`

  $.ajax({

    url: queryURL,
    method: 'GET',

}).then(function (data) {
  
  const infoEl = JSON.parse(data)
  
  createClear()
    console.log(infoEl["response"]["contributors"]["contributor"]["0"]["@attributes"])
    let repName = $("<h3>").attr("class","card-text")
    let org1 = $("<p>").attr("class","card-text")
    let org2 = $("<p>").attr("class","card-text")
    let org3 = $("<p>").attr("class","card-text")
    let org4 = $("<p>").attr("class","card-text")
    let org5 = $("<p>").attr("class","card-text")
    let org6 = $("<p>").attr("class","card-text") 
    let org7 = $("<p>").attr("class","card-text") 
    let org8 = $("<p>").attr("class","card-text") 
    let org9 = $("<p>").attr("class","card-text") 
    let org10 = $("<p>").attr("class","card-text") 
    


    repName.text(infoEl["response"]["contributors"]["@attributes"]["cand_name"])
    org1.text(infoEl["response"]["contributors"]["contributor"]["0"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["0"]["@attributes"]["total"])
    org2.text(infoEl["response"]["contributors"]["contributor"]["1"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["1"]["@attributes"]["total"])
    org3.text(infoEl["response"]["contributors"]["contributor"]["2"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["2"]["@attributes"]["total"])
    org4.text(infoEl["response"]["contributors"]["contributor"]["3"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["3"]["@attributes"]["total"])
    org5.text(infoEl["response"]["contributors"]["contributor"]["4"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["4"]["@attributes"]["total"])
    org6.text(infoEl["response"]["contributors"]["contributor"]["5"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["5"]["@attributes"]["total"])
    org7.text(infoEl["response"]["contributors"]["contributor"]["6"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["6"]["@attributes"]["total"])
    org8.text(infoEl["response"]["contributors"]["contributor"]["7"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["7"]["@attributes"]["total"])
    org9.text(infoEl["response"]["contributors"]["contributor"]["8"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["8"]["@attributes"]["total"])
    org10.text(infoEl["response"]["contributors"]["contributor"]["9"]["@attributes"]["org_name"]+":"+" $"+infoEl["response"]["contributors"]["contributor"]["9"]["@attributes"]["total"])
  


    $("#main").append(repName).append(org1).append(org2).append(org3).append(org4).append(org5).append(org6).append(org7).append(org8).append(org9).append(org10).append(btn2)
   
    
    });
}).catch(function(error) {
  console.log(error)
  notFound();
});

function notFound(){
  let nf = $("<p>").attr("class","card-text").text("We were unable to find that politician-- please enter another or try again later.")
  $("#main").append(nf)
  createClear()
  
}

})
})


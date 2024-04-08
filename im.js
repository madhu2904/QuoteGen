fetch('http://programming-quotes-api.herokuapp.com/quotes/random')
.then(response=>{
return response.json();
})
.then(data => {console.log(data)})
.catch(error => console.log(error))
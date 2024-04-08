 getquote=async ()=>
{
    var url= "https://type.fit/api/quotes"
const response = await fetch(url);
let AllQuotes =await response.json();

}



fetch("https://type.fit/api/quotes")
.then(response=>
    {
        if(!response.ok){
            throw new Error("there is an error in loading")
        }
        
        return response.json()
    })
.then(data => {c=([data[0].text,data[1].author]);
    
    document.getElementById("quoteBox").innerHTML
})
.catch(error => console.log(error))



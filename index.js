
const quoteText=document.getElementById("quoteText");
const author=document.getElementById("authorText");
const linkedinButton=document.getElementById("linkedin");
const button=document.getElementById("btn");


const getQuote= async ()=>{
    var url="https://type.fit/api/quotes";
    const response=await fetch(url);
    if(!response.ok)
    {
        console.log("error");

    }
    const Allquotes=await response.json();
    const index = Math.floor(Math.random()*Allquotes.length);
    var quote=Allquotes[index].text;
    var auth=Allquotes[index].author;
    if(auth==null)
    {
        auth="Anonymous";
    }
    quoteText.innerHTML=quote;
    author.innerHTML=auth;
}
getQuote();

//https://www.omdbapi.com/?t=thor&apikey=ef650941

function getMovie(){
   let title=document.getElementById('title').value;

   const url=`https://www.omdbapi.com/?t=${title}&apikey=ef650941`

fetch(url).then(function(res){
    return res.json()
}).then(function(res){
    append(res)
    console.log(res)
})
   

}


function append(data){
    let box=document.getElementById('box')
    box.innerHTML=null;
    let title=document.createElement('h1')
    title.innerText=`movie: ${data.Title}`;

    let lang=document.createElement('p')
    lang.innerText=`language: ${data.Language}`;

    let poster=document.createElement('img')
    poster.src=`${data.Poster}`
    // poster.style.width='100%';

    console.log(title)
    box.append(poster,title,lang)


    
}

var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"];
let el = document.getElementById('magic');
let word_counter = 0;
let character_counter = 0;

function updateText()
{
    let caracter = words[word_counter][character_counter];
    
    if (caracter === ' '){
        el.innerHTML = el.innerHTML + "&nbsp;";
    } else {
        el.innerHTML = el.innerHTML + caracter;
    }
    
    if(character_counter == words[word_counter].length)
    {
        word_counter++; 	            //escoge una palabra distinta
        character_counter = 0;	        //empieza de nuevo con el primer carácter de la palabra
        el.innerHTML = '';              //establece el HTML para que esté en blanco
        
        //si estamos mostrando la última palabra, vuelve a la primera palabra
        if(word_counter == words.length)
            word_counter = 0;
    } else {character_counter++;}
}
setInterval(updateText,300);
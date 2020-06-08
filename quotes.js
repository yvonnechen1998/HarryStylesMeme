var quotes = [
    'I can make your girlfriend scream louder than you ever could just by pressing her follow button',
    'Swallow your fears. Wipe off your tears. Let go of your darkest years. Chin up. Smile. Walk Away', 
    'Real girl isn\'t perfect. Perfect girl isn\'t real.', 
    'Chin Up. Smile. Walk Away.', 
    'We have a choice. to live or to exist',
    'Be a lover. Give love. Choose love', 
    'TREAT PEOPLE WITH KINDNESS', 
    'Please feel free to be whoever yoou want to be in this room ', 
    'I ask you to please choose love every single day.'

]

// function newQuote() { 
//     var randomNumber =  Math.floor(Math.random()*(quotes.length));   
// }

function newQuote() { 

var randomNumber =  Math.floor(Math.random()*(quotes.length));  
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; 

} 
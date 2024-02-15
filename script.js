$('#shake-me').click(function(){
    let val = Math.floor(Math.random() * 20) + 1;

    switch (val) {
        case 1:
            console.log('It is certain.');
            $("#message").html("It is certain.");
            break;
        case 2:
            console.log('It is decidedly so.');
            $("#message").html("It is decidedly so.");
            break;
        case 3:
            console.log('Without a doubt.');
            $("#message").html("Without a doubt.");
            break;
        case 4:
            console.log('Yes definitely.');
            $("#message").html("Yes definitely.");
            break;
        case 5: 
            console.log('You may rely on it.');
            $("#message").html("You may rely on it.");
            break;
        case 6: 
            console.log('As I see it, yes.');
            $("#message").html("As I see it, yes.");
            break;
        case 7: 
            console.log('Most likely.');
            $("#message").html("Most likely.");
            break;  
        case 8: 
            console.log('Outlook good.');
            $("#message").html("Outlook good.");
            break;  
        case 9: 
            console.log('Yes.');
            $("#message").html("Yes.");
            break;
        case 10: 
            console.log('Signs point to yes.');
            $("#message").html("Signs point to yes.");
            break;
        case 11: 
            console.log('Reply hazy, try again.');
            $("#message").html("Reply hazy, try again.");
            break;
        case 12: 
            console.log('Ask again later.');
            $("#message").html("Ask again later.");
            break;
        case 13: 
            console.log('Better not tell you now.');
            $("#message").html("Better not tell you now.");
            break;
        case 14: 
            console.log('Cannot predict now.');
            $("#message").html("Cannot predict now.");
            break;
        case 15: 
            console.log('Concentrate and ask again.');
            $("#message").html("Concentrate and ask again.");
            break;
        case 16: 
            console.log('Don\'t count on it.');
            $("#message").html("Don't count on it.");
            break;
        case 17: 
            console.log('My reply is no.');
            $("#message").html("My reply is no.");
            break;
        case 18: 
            console.log('My sources say no.');
            $("#message").html("My sources say no.");
            break;
        case 19: 
            console.log('Outlook not so good.');
            $("#message").html("Outlook not so good.");
            break;
        case 20: 
            console.log('Very doubtful.');
            $("#message").html("Very doubtful.");
            break;
        default:
            console.log('You shook me too hard! Try again for a new fortune.');
            $("#message").html("You shook me too hard! Try again for a new fortune.");
            break;
    }
})



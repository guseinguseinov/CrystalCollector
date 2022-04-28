$(document).ready(() => {
    var randomNum = $('.random-num');
    var userScore = $('.user-score');
    var wins = $('.wins');
    var loses = $('.loses');
    var valueOfImg = [
        $('.red'),
        $('.blue'),
        $('.yellow'),
        $('.green')
    ];

    const getRandomNumToGuess = () =>  {
        let num = Math.floor(Math.random()*100+20);
        randomNum.text(`${num}`);
    }

    const getRandomNumForCrystal = () => {
        for (let i = 0; i < valueOfImg.length; i ++) {
            let num = Math.floor(Math.random()*12 + 1);
            valueOfImg[i].attr('value', num)
        }
    }

    const reset = () => {
        getRandomNumToGuess();
        getRandomNumForCrystal();
        userScore.text(0);

        
    }

    reset();    

    $('.info').on('click',() => {
        let result = '';
        for (let color of valueOfImg){
            result += `${color.attr('alt')} : ${color.attr('value')} \n`
        }
        alert(result);
    })

    $('.color').on('click',function (){
        var value = $(this).attr('value');
        userScore.text(parseInt(userScore.text()) + parseInt(value));
        
        if (parseInt(userScore.text()) == parseInt(randomNum.text())) {
            wins.text(parseInt(wins.text())+ 1);
            $('.win-div').show(2000);
            $('.win-div > p').text('You won!!!');
            setTimeout(function(){
                $('.win-div').hide(1000);                    
            }, 3000);
            
            reset();
        } else if (parseInt(userScore.text()) > parseInt(randomNum.text())) {
            loses.text(parseInt(loses.text()) + 1);
            $('.win-div > p').text('You losed!!!');
            $('.win-div').show(2000);
            setTimeout(function(){
                $('.win-div').hide(1000);                    
            }, 3000);
            reset();
        }
    })
})
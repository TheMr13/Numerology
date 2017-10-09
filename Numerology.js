

numerologyIsHorseShit();

function numerologyIsHorseShit (){
    var siteInput = document.getElementById("theInput").value;
    var lowercaseSiteInput = siteInput.toLowerCase();
    var backToSite;

    var a = firstNumber(lowercaseSiteInput);
    if (a && a == 11 || a == 22){
        backToSite = theBullshit(a);
    } else if (a) {
        var b = secondNumber(a);
        while(b > 9) {
            b = secondNumber(b);
        }
        var c = theBullshit(b);
        backToSite = c;
    } else {
        backToSite = "Please enter a real name my child.";
    }

    document.getElementById("fromBackToSite").innerHTML = backToSite;

    console.log(backToSite)
    
    function firstNumber(nameFromUser) {
        var alphabet = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 1, "k": 2, "l": 3, "m": 4, "n": 5, "o": 6, "p": 7, "q": 8, "r": 9, "s": 1, "t": 2, "u": 3, "v": 4, "w": 5, "x": 6, "y": 7, "z": 8, " ": 0};
        var name = (nameFromUser)
        var nameSum = 0;
        for (var i = 0; i < name.length; i ++) {
            nameSum += alphabet[name[i]]
        }
        return nameSum;
    }

    function secondNumber(firstNumberOutput) {
        var nameSumString = firstNumberOutput.toString();
        var numbers = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}
        var finalNumber = 0;
        for (var j = 0; j < nameSumString.length; j ++) {
            finalNumber += numbers[nameSumString[j]];
        }
        return finalNumber;
    }

    function theBullshit(secondNumberOutput) {
        switch(secondNumberOutput) {
            case 1: 
                return "Your numerological value is 1, you are considered to be an aggressive and self-assured individual who will never back down from a challenge. Your number is governed by the sun, and a lot of people consider you to be a great conversationalist on almost any topic under the sun.";
            case 2: 
                return "Your numerological value is 2, you are imaginative, idealistic and gentle. You strive to remain neutral during conflicts, and you love nature as well as any art form that allows you to express your creativity.";
            case 3: 
               return "Your numerological value is 3, you are opportunistic and lucky, and you almost always seem to be in the right place at the right time.";
            case 4: 
              return "Your numerological value is 4, you are mature, stable and a security lover. You do not like taking risks, and your place a big premium on your home, safety and following the rules.";
            case 5: 
               return "Your numerological value is 5, you are fun-loving, spontaneous and an adventure lover. You are unconventional and always seem to be able to land on your feet any time.";
            case 6: 
              return "Your numerological value is 6, you have great taste and are very creative as well as intelligent. People look to you to solve problems that require a bit of logic.";
            case 7: 
              return "Your numerological value is 7, you are mysterious, pensive and introverted. You also are able to bring together the right people at all times for events and get-togethers, and you have an uncanny ability to read into the motives of others.";
            case 8: 
              return "Your numerological value is 8, you are ambitious to the point of almost being ruthless. You are able to see trends and you seem to ride every successful wave to its completion.";
            case 9: 
                return "Your numerological value is 9, you are compassionate, loving, spiritual and harmony-seeking. You are charming, magnetic and have an inner confidence that is enviable. You are also a born leader and can achieve a lot as long as you a given a platform for self-expression.";
            case 11:
                return "Your numerological value is 11, this represents instinct and is the most intuitive of all numbers. It is your connection to your subconscious, to gut feeling and knowledge without rationality."
            case 22:
                return "Your numerological value is 22, this holds more power than any other number, earning it the nickname the Master Builder. It is a pragmatic number, a doer, capable of spinning wild dreams into concrete reality."
        }
    }
}
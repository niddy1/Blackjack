// function Deck(){
//     var face = ["J","Q","K","A"];
//     var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var suits = ["Spades","Diamonds","Hearts","Clubs"];
//     var deck = [];
//
//     for (var i = 0; i <face.length;i++){
//         //create face cards
//         deck.push(face[i]+" of " + suits[0]);
//         deck.push(face[i]+" of " + suits[1]);
//         deck.push(face[i]+" of " + suits[2]);
//         deck.push(face[i]+" of " + suits[3]);
//     }
//     for (var j = 0; j < numbers.length;j++){
//         deck.push(numbers[j]+ " of " + suits[0]);
//         deck.push(numbers[j]+ " of " + suits[1]);
//         deck.push(numbers[j]+ " of " + suits[2]);
//         deck.push(numbers[j]+ " of " + suits[3]);
//     }
//      return deck;
// }
// function Dealer(){
//     this.deck = new Deck();
//     this.dealerHand = [];
//     this.playerHand = [];
//     this.shuffleDeck = function shuffleDeck(){
//         var deckLength = this.deck.length;
//         var t;
//         var randNumber;
//         while (deckLength) {
// // While there remain elements to shuffle…
//             randNumber = Math.floor(Math.random() * deckLength--);
// // generates random number with a max value of the deck length, then subtracts 1 from decklength
//             t = this.deck[deckLength];
//             // And swap it with the current element.
//             this.deck[deckLength] = this.deck[randNumber];
//             this.deck[randNumber] = t;
//         }
//         return this.deck;
//     };
// }
// Dealer.prototype.dealCards = function(){
//     this.dealerHand.push(this.deck.splice(0,1)[0]);
//     this.dealerHand.push(this.deck.splice(0,1)[0]);
//     this.playerHand.push(this.deck.splice(0,1)[0]);
//     this.playerHand.push(this.deck.splice(0,1)[0]);
// //    console.log(this.dealerHand, this.playerHand);
//
// };
//
// var dealerJimmy = new Dealer();
// newDeck = dealerJimmy.shuffleDeck();
// newDeck;
// dealerJimmy.dealCards();
// dealerJimmy.dealerHand;
//
//
//
// Dealer.prototype.handEvaluator = function(){
//     return this.dealerHand[0]
//
// }
// dealerJimmy.handEvaluator()
//
// ////////////////////////////////////////////
// var faceCards = ["J","Q","K","A"];
// var suits = ["Spades","Diamonds","Hearts","Clubs"];
// var deck = [];
//
// function Card(symbol, suit, value){
//     this.symbol = symbol;
//     this.suit = suit;
//     this.value = value;
//     }
//
// function MakeDeck() {
//       for (var i = 2; i < 11; i++) {
//         deck.push( new Card( i.toString(), suits[0], i) );
//         deck.push( new Card( i.toString(), suits[1], i) );
//         deck.push( new Card( i.toString(), suits[2], i) );
//         deck.push( new Card( i.toString(), suits[3], i) );
//       }
//       for (var j = 0; j < 4; j++) {
//         for (var k = 0; k < 4; k++) {
//           deck.push( new Card( faceCards[j], suits[k], (faceCards[j] == 'A' ? 11 : 10)) );
//         }
//       }return deck;
//     }
//
// //makeDeck();
//
// function Dealer(){
//     this.deck = new MakeDeck();
//     this.dealerHand = [];
//     this.playerHand = [];
//     this.shuffleDeck = function shuffleDeck(){
//         var deckLength = this.deck.length;
//         var t;
//         var randNumber;
//         while (deckLength) {
// // While there remain elements to shuffle…
//             randNumber = Math.floor(Math.random() * deckLength--);
// // generates random number with a max value of the deck length, then subtracts 1 from decklength
//             t = this.deck[deckLength];
//             // And swap it with the current element.
//             this.deck[deckLength] = this.deck[randNumber];
//             this.deck[randNumber] = t;
//         }
//         return this.deck;
//     };
// }
//
// var dealerIan = new Dealer();
//
// dealerIan.deck[0];
// dealerIan.shuffleDeck();
// Dealer.prototype.dealCards = function(){
//     this.dealerHand.push(deck.splice(0,1)[0]);
//     this.dealerHand.push(deck.splice(0,1)[0]);
//     this.playerHand.push(deck.splice(0,1)[0]);
//     this.playerHand.push(deck.splice(0,1)[0]);
//
//     console.log(this.dealerHand);
//     console.log(this.playerHand);
//     console.log(deck.length);
// };
//
// dealerIan.dealCards();




///////////not working
 $(document).ready(function(){
//   console.log("we good")
//   Dealer()
//   var dealerIan = new Dealer()
  dealerIan.evaluateHand();
  dealerIan.displayValues();
  dealerIan.bindCards();
  dealerIan.hitMe();
   dealerIan.checkWinOnHit();
  dealerIan.checkWinOnStand();

})
var faceCards = ["jack","queen","king","ace"];
var suits = ["spades","diamonds","hearts","clubs"];
var deck = [];

function Card(symbol, suit, value, image){
    this.symbol = symbol;
    this.suit = suit;
    this.value = value;
    this.image = image;
    }


function MakeDeck() {
      for (var i = 2; i < 11; i++) {
        deck.push( new Card( i.toString(), suits[0], i, "cards/" + i+ "_of_" + suits[0] + ".png"   ) );
        deck.push( new Card( i.toString(), suits[1], i, "cards/" + i+ "_of_" + suits[1] + ".png"   ) );
        deck.push( new Card( i.toString(), suits[2], i, "cards/" + i+ "_of_" + suits[2] + ".png"   ) );
        deck.push( new Card( i.toString(), suits[3], i, "cards/" + i+ "_of_" + suits[3] + ".png"   ) );
      }
      for (var j = 0; j < 4; j++) {
          deck.push( new Card( faceCards[j], suits[0], (faceCards[j] == 'ace' ? 11 : 10),"cards/" + faceCards[j] + "_of_" + suits[0] + ".png"       ) );
          deck.push( new Card( faceCards[j], suits[1], (faceCards[j] == 'ace' ? 11 : 10),"cards/" + faceCards[j] + "_of_" + suits[1] + ".png"       ) );
          deck.push( new Card( faceCards[j], suits[2], (faceCards[j] == 'ace' ? 11 : 10),"cards/" + faceCards[j] + "_of_" + suits[2] + ".png"       ) );
          deck.push( new Card( faceCards[j], suits[3], (faceCards[j] == 'ace' ? 11 : 10),"cards/" + faceCards[j] + "_of_" + suits[3] + ".png"       ) );
      }



      return deck;
    }

//makeDeck();

function Dealer(){
    this.deck = new MakeDeck();
    this.dealerHand = [];
    this.playerHand = [];
    this.hitPool = [];
    this.playerValue=0;
    this.dealerValue=0;
    this.shuffleDeck = function shuffleDeck(){
        var deckLength = this.deck.length;
        var t;
        var randNumber;
        while (deckLength) {
// While there remain elements to shuffle…
            randNumber = Math.floor(Math.random() * deckLength--);
// generates random number with a max value of the deck length, then subtracts 1 from decklength
            t = this.deck[deckLength];
            // And swap it with the current element.
            this.deck[deckLength] = this.deck[randNumber];
            this.deck[randNumber] = t;
        }
        return this.deck;
    };
}

var dealerIan = new Dealer();

dealerIan.deck;
dealerIan.shuffleDeck();
Dealer.prototype.dealCards = function(){
    this.dealerHand.push(dealerIan.deck.splice(0,1)[0]);
    //this.dealerHand.push(deck.splice(0,1)[0]);
    this.dealerHand.push(dealerIan.deck.splice(0,1)[0]);
    this.playerHand.push(dealerIan.deck.splice(0,1)[0]);
    this.playerHand.push(dealerIan.deck.splice(0,1)[0]);
    //console.log(this.dealerHand);
    //console.log(this.playerHand);
    //console.log(deck.length);
};

dealerIan.dealCards();

Dealer.prototype.evaluateHand = function(){

    // this.playerValue = this.playerHand.reduce(function(a, b) {
    //   console.log(this.playerValue)
    //     return a.value + b.value;
    //   });

    var tempSumPlayer = 0;
    var tempSumDealer = 0;
    console.log(this.dealerHand[0].value);
    console.log(this.dealerHand);
    console.log("");
    console.log(this.playerHand);
    for (var i = 0; i < this.dealerHand.length; i++){
        //console.log(this.dealerHand[i].value)

        tempSumDealer += this.dealerHand[i].value;
    }
    for (var j = 0; j < this.playerHand.length; j++){
        //this.playerValue += this.playerHand[j].value;
        tempSumPlayer += this.playerHand[j].value;
    }
    this.dealerValue = tempSumDealer;
    this.playerValue = tempSumPlayer

    console.log(this.dealerValue);
    console.log(this.playerValue);
   console.log(dealerCard1=this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit)
};
//dealerIan.playerHand[0].value
//dealerIan.evaluateHand();


Dealer.prototype.hitMe = function(){
  $('.hit').on('click', function(e){
      e.preventDefault();
      var newCard = dealerIan.deck.splice(0,1)[0]
      dealerIan.playerHand.push(newCard)
      dealerIan.evaluateHand()
      //this.hitPool.push(dealerIan.deck.splice(0,1)[0]);
      $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', newCard.image ))

    });
  }


  Dealer.prototype.checkWin = function(){
    dealerIan.evaluateHand()
    if (dealerIan.dealerValue === 21){
      alert("You lose, dealer 21")
    }
    else if (dealerIan.playerValue === 21){
      alert("You win, 21!")
    }
    else if (dealerIan.playerValue > 21){
      alert("Bust, you lose!")
    }
    else if(dealerIan.dealerValue > 21){
      alert("Dealer busts, you win!")
    }
    else if (dealerIan.playerValue > dealerIan.dealerValue){
      alert("YOU WIN - higher than dealer")
    }
    else if (dealerIan.dealerValue > dealerIan.playerValue){
      alert("YOU LOSE - lower than dealer")
    }
  }




  Dealer.prototype.checkWinOnHit = function(){
      $(".hit").on("click", function(e){
        e.preventDefault();
        if (dealerIan.playerValue === 21){
          alert ("21, you win!!!")
        }
        else if (dealerIan.playerValue > 21){
          alert ("Bust")
        }
      })
  };

  Dealer.prototype.checkWinOnStand = function(){
    $(".stand").on("click", function(){
    //  debugger;
      var newCard = dealerIan.deck.splice(0,1)[0];
      dealerIan.evaluateHand();
      if (dealerIan.dealerValue > 16){
        return dealerIan.checkWin();
      }

      else while (dealerIan.dealerValue <= 16){
        var newCard = dealerIan.deck.splice(0,1)[0];
        dealerIan.dealerHand.push(newCard)


        $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', newCard.image ));
        dealerIan.evaluateHand();
      }
      dealerIan.checkWin();

    })
  };


///PRECHANGES TO WIN FUNCTION
// Dealer.prototype.checkWinOnHit = function(){
//     $(".hit").on("click", function(e){
//       e.preventDefault();
//       if (dealerIan.playerValue === 21){
//         alert ("21, you win!!!")
//       }
//       else if (dealerIan.playerValue > 21){
//         alert ("Bust")
//       }
//     })
// };
// dealerIan.checkWinOnHit()
// Dealer.prototype.checkWinOnStand = function(){
//   $(".stand").on("click", function(e){
//     e.preventDefault();
//     var newCard = dealerIan.deck.splice(0,1)[0]
//     while (dealerIan.dealerValue < 16){
//       $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', newCard.image ))
//       dealerIan.evaluateHand()
//     }
//     console.log(dealerIan.playerValue)
//     if (dealerIan.playerValue > dealerIan.dealerValue){
//       alert ("You win!!")
//     }
//     else if (dealerIan.playerValue < dealerIan.dealerValue){
//       alert ("You losseeeeeee")
//     }
//   })
// };
// dealerIan.checkWinOnStand()





  //if player presses hit button, new card is added to hand
  //recalculates value of hand
  //if value > 21. return bust, game over
  // else if value === 21 return win, game over
  // else if value < 21, loop back to line 222

// Dealer.prototype.cardURL = function(){
//   return ("cards/"+this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit+".png")
// }
// dealerIan.cardURL()


//var test = this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit+".png"
Dealer.prototype.bindCards = function(){
  //for (){
    //dealerCard1=this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit
    ///3_of_spades
    $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.dealerHand[0].image ))
    $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.dealerHand[1].image ))
    $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.playerHand[0].image ))
    $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.playerHand[1].image ))
  //}
}

Dealer.prototype.displayValues = function(){
  $(".playerValue").html(dealerIan.playerValue)
}
dealerIan.displayValues()
dealerIan.hitMe()

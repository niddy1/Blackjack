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




$(document).ready(function(){
  $(".new-deal").on('click', function(){
    dealerIan.newGame();
  });
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

  //dealerIan.deck;
  //dealerIan.shuffleDeck();
  Dealer.prototype.dealCards = function(){
      dealerIan.shuffleDeck();
      this.dealerHand.push(dealerIan.deck.splice(0,1)[0]);
      //this.dealerHand.push(deck.splice(0,1)[0]);
    //  this.dealerHand.push(dealerIan.deck.splice(0,1)[0]);
      this.playerHand.push(dealerIan.deck.splice(0,1)[0]);
      this.playerHand.push(dealerIan.deck.splice(0,1)[0]);
      //console.log(this.dealerHand);
      //console.log(this.playerHand);
      //console.log(deck.length);
  };

  // dealerIan.dealCards();

  Dealer.prototype.evaluateHand = function(){
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
    this.playerValue = tempSumPlayer;

    console.log(this.dealerValue);
    console.log(this.playerValue);
    console.log(dealerCard1=this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit);
  };
  //dealerIan.playerHand[0].value
  //dealerIan.evaluateHand();

  Dealer.prototype.hitMe = function(){
    $('.hit').on('click', function(){
      var newCard = dealerIan.deck.splice(0,1)[0];
      dealerIan.playerHand.push(newCard);
      dealerIan.evaluateHand();
      //this.hitPool.push(dealerIan.deck.splice(0,1)[0]);
      $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', newCard.image ));
      dealerIan.displayValues();
    });
  };
  Dealer.prototype.checkWin = function(){
    dealerIan.evaluateHand();
    if (dealerIan.dealerValue === dealerIan.playerValue){
      $(".messages").text("PUSH").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.dealerValue === 21){
      //alert("You lose, dealer 21");
      $(".messages").text("YOU LOSE").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.playerValue === 21){
      //alert("You win, 21!");
      $(".top-messages").text("PLAYER 21").show();
      setTimeout(function() { $(".top-messages").hide(); }, 1500);
      $(".messages").text("YOU WIN").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.playerValue > 21){
      // for (var i = 0; i < dealerIan.playerHand.length; i++){
      //   if(dealerIan.playerHand[i].value === 11 ){
      //     dealerIan.playerHand[i].value
      //
      //   }
      // }
      $(".messages").text("BUSTED").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if(dealerIan.dealerValue > 21){
      //alert("Dealer busts, you win!");
      $(".top-messages").text("DEALER BUST").show();
      setTimeout(function() { $(".top-messages").hide(); }, 1500);
      $(".messages").text("YOU WIN").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.playerValue > dealerIan.dealerValue){
      $(".messages").text("YOU WIN").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.dealerValue > dealerIan.playerValue){
      $(".messages").text("YOU LOSE").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
      }
    };

  // Dealer.prototype.ace = function(value){
  //   if (value > 21){
  //     for (var i = 0; i < dealerIan.playerHand.length; i++){
  //       if(dealerIan.playerHand[i].value === 11 ){
  //         dealerIan.playerValue = dealerIan.playerValue - 10
  //         //dealerIan.evaluateHand()
  //         return value;
  //       }
  //     }
  //   }
  // }
  // Dealer.prototype.checkAcePlayer = function(){
  //   for (var i = 0; i < dealerIan.playerHand.length; i++){
  //     if(dealerIan.playerHand[i].value === 11 ){
  //       return true
  //     }
  //     else{
  //       return false
  //       }
  // }

  Dealer.prototype.checkWinOnHit = function(){
    $(".hit").on("click", function(){
      if (dealerIan.playerValue === 21){
        $(".messages").text("YOU WIN").show();
        setTimeout(function() { $(".messages").hide(); }, 1500);
        $(".top-messages").text("Player 21").show();
        setTimeout(function() { $(".top-messages").hide(); }, 1500);
      }
      else if (dealerIan.playerValue > 21){
        $(".messages").text("BUSTED").show();
        setTimeout(function() { $(".messages").hide(); }, 1500);
        }
      });
  };
  Dealer.prototype.checkWinOnStand = function(){
    $(".stand").on("click", function(){
    //  debugger;
      $(".back-card").remove();
      var newCard = dealerIan.deck.splice(0,1)[0];
      dealerIan.evaluateHand();
      // if (dealerIan.dealerValue === dealerIan.playerValue){
      //   alert("Tie")
      // }
      if (dealerIan.dealerValue > 16){
        return dealerIan.checkWin();
      }
      else while (dealerIan.dealerValue <= 16){
        var newCard = dealerIan.deck.splice(0,1)[0];
        dealerIan.dealerHand.push(newCard);
        $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', newCard.image ));
        dealerIan.evaluateHand();
        dealerIan.displayValues();
      }
      dealerIan.checkWin();
      $(".dealer-value").html(dealerIan.dealerValue);
    });
  };
  //var test = this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit+".png"
  Dealer.prototype.bindCards = function(){
    //for (){
      //dealerCard1=this.dealerHand[0].symbol +"_of_"+ this.dealerHand[0].suit
      ///3_of_spades
    $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.dealerHand[0].image ));
    //  $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.dealerHand[1].image ));
    $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.playerHand[0].image ));
    $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.playerHand[1].image ));
    //}
  };

  Dealer.prototype.displayValues = function(){
    $(".player-value").html(dealerIan.playerValue);
    //$(".dealer-value").html(dealerIan.dealerValue)
  };
  Dealer.prototype.icons = function(){
    $(".dealer-name-plate").mouseenter(function(){
      $(".koala").show();
    });
    $(".dealer-name-plate").mouseout(function(){
      $(".koala").hide();
    });
    $(".player-name-plate").mouseenter(function(){
      $(".margay").show();
    });
    $(".player-name-plate").mouseout(function(){
      $(".margay").hide();
    });
  };
  //dealerIan.displayValues()
  //dealerIan.hitMe()

  dealerIan.hitMe();
  dealerIan.checkWinOnHit();
  dealerIan.checkWinOnStand();
  $(".dealer-name-plate").hide();
  $(".player-name-plate").hide();
  Dealer.prototype.newGame = function(){
    //debugger
    $(".dealer-name-plate").show();
    $(".player-name-plate").show();
    dealerIan.playerHand = [];
    dealerIan.dealerHand = [];
    $(".dealer-cards").empty();
    $(".player-cards").empty();
    $(".dealer-value").empty();
    $(".dealer-cards").append($('<img src="cards/backcard.jpg">').addClass("back-card"));
    dealerIan.shuffleDeck();
    dealerIan.dealCards();
    dealerIan.evaluateHand();
    dealerIan.displayValues();
    dealerIan.bindCards();
    dealerIan.icons();
    };
});

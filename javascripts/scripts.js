$(document).ready(function(){
  $(".new-deal").on('click', function(){
    dealerIan.newGame();
  });
  var faceCards = ["jack","queen","king","ace"];
  var suits = ["spades","diamonds","hearts","clubs"];
  var deck = [];
  //cards will be objects with value and image-link attributes to make referencing easier.
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

  Dealer.prototype.dealCards = function(){
      //will deal initial 3 cards for game start.
      dealerIan.shuffleDeck();
      this.dealerHand.push(dealerIan.deck.splice(0,1)[0]);
      this.playerHand.push(dealerIan.deck.splice(0,1)[0]);
      this.playerHand.push(dealerIan.deck.splice(0,1)[0]);
  };

  Dealer.prototype.evaluateHand = function(){
    //loops through dealer/player hands and sums values
    var tempSumPlayer = 0;
    var tempSumDealer = 0;
    // console.log(this.dealerHand);
    // console.log("^^^dealers hand^^^");
    // console.log(this.playerHand);
    for (var i = 0; i < this.dealerHand.length; i++){
      tempSumDealer += this.dealerHand[i].value;
    }
    for (var j = 0; j < this.playerHand.length; j++){
      tempSumPlayer += this.playerHand[j].value;
    }
    this.dealerValue = tempSumDealer;
    this.playerValue = tempSumPlayer;
    // console.log("dealers value: " + this.dealerValue);
    // console.log("players value: " + this.playerValue);
  };

  Dealer.prototype.hitMe = function(){
    //deals one card to player. pushes to hand, appends image to screen.
    $('.hit').on('click', function(){
      var newCard = dealerIan.deck.splice(0,1)[0];
      dealerIan.playerHand.push(newCard);
      dealerIan.evaluateHand();
      $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', newCard.image ));
      dealerIan.displayValues();
    });
  };

  Dealer.prototype.checkWin = function(){
    //checks for winner and displays relavant message div
    dealerIan.evaluateHand();
    if (dealerIan.dealerValue === dealerIan.playerValue){
      $(".messages").text("PUSH").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.dealerValue === 21){
      $(".messages").text("YOU LOSE").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.playerValue === 21){
      $(".top-messages").text("PLAYER 21").show();
      setTimeout(function() { $(".top-messages").hide(); }, 1500);
      $(".messages").text("YOU WIN").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if (dealerIan.playerValue > 21){
      $(".messages").text("BUSTED").show();
      setTimeout(function() { $(".messages").hide(); }, 1500);
    }
    else if(dealerIan.dealerValue > 21){
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
      $(".back-card").remove();
      var newCard = dealerIan.deck.splice(0,1)[0];
      dealerIan.evaluateHand();
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

  Dealer.prototype.bindCards = function(){
    //imagebinding for initial 3 card deal at gamestart
    $(".dealer-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.dealerHand[0].image ));
    $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.playerHand[0].image ));
    $(".player-cards").append($("<img>").addClass("playing-cards").attr('src', dealerIan.playerHand[1].image ));
  };

  Dealer.prototype.displayValues = function(){
    //display player hand value
    $(".player-value").html(dealerIan.playerValue);
  };

  Dealer.prototype.icons = function(){
    //player & dealer icon display on mouse input
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
  //call functions that only need to be called once and hide name plates before new game is started
  dealerIan.hitMe();
  dealerIan.checkWinOnHit();
  dealerIan.checkWinOnStand();
  $(".dealer-name-plate").hide();
  $(".player-name-plate").hide();

  Dealer.prototype.newGame = function(){
    $(".blackjack").hide();
    $(".dealer-name-plate").show();
    $(".player-name-plate").show();
    //emptys previous hands on new deal
    dealerIan.playerHand = [];
    dealerIan.dealerHand = [];
    $(".dealer-cards").empty();
    $(".player-cards").empty();
    $(".dealer-value").empty();
    //back card image for hidden dealer card
    $(".dealer-cards").append($('<img src="cards/backcard.jpg">').addClass("back-card"));
    dealerIan.shuffleDeck();
    dealerIan.dealCards();
    dealerIan.evaluateHand();
    dealerIan.displayValues();
    dealerIan.bindCards();
    dealerIan.icons();
    };
});

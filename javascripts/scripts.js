function Deck(){
    var face = ["J","Q","K","A"];
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    var suits = ["Spades","Diamonds","Hearts","Clubs"];
    var deck = [];

    for (var i = 0; i <face.length;i++){
        //create face cards
        deck.push(face[i]+" of " + suits[0]);
        deck.push(face[i]+" of " + suits[1]);
        deck.push(face[i]+" of " + suits[2]);
        deck.push(face[i]+" of " + suits[3]);
    }
    for (var j = 0; j < numbers.length;j++){
        deck.push(numbers[j]+ " of " + suits[0]);
        deck.push(numbers[j]+ " of " + suits[1]);
        deck.push(numbers[j]+ " of " + suits[2]);
        deck.push(numbers[j]+ " of " + suits[3]);
    }
     return deck;
}
function Dealer(){
    this.deck = new Deck();
    this.dealerHand = [];
    this.playerHand = [];
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
Dealer.prototype.dealCards = function(){
    this.dealerHand.push(this.deck.splice(0,1)[0]);
    this.dealerHand.push(this.deck.splice(0,1)[0]);
    this.playerHand.push(this.deck.splice(0,1)[0]);
    this.playerHand.push(this.deck.splice(0,1)[0]);
//    console.log(this.dealerHand, this.playerHand);

};

var dealerJimmy = new Dealer();
newDeck = dealerJimmy.shuffleDeck();
newDeck;
dealerJimmy.dealCards();
dealerJimmy.dealerHand;



Dealer.prototype.handEvaluator = function(){
    return this.dealerHand[0]

}
dealerJimmy.handEvaluator()

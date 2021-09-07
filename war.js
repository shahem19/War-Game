class Card{                            
    constructor(value, suit, face){
        this.suit = suit;
        this.value = value;
        this.face = face;
    };
    

    describe(){                        
        return `${this.face} of ${this.suit}`;
    };
};


class Deck{                             
    constructor(){                      
        this.deckOfCards = [];
    };

    createDeckOfCards(){                
        for (let i = 2; i <= 14; i++){
            this.deckOfCards.push(new Card(i, "Hearts", i));
            
            this.deckOfCards.push(new Card(i, "Spades", i));
            
            this.deckOfCards.push(new Card(i, "Clubs", i));
            
            this.deckOfCards.push(new Card(i, "Diamonds", i)); 

        } 

        for(let card of this.deckOfCards){      
            if(card.value === 14){
                card.face = "Ace";
            }else if(card.value === 11){
                card.face = "Jack";
            }else if(card.value === 12){
                card.face = "Queen";
            }else if(card.value === 13){
                card.face = "King";
            }
        };
    };


    shuffleCards(){                                         
        this.deckOfCards.sort(function(){
            return Math.random() - 0.5;
        });
    };


    dealCards(){                            
        for (let i = 51; i >= 0; i--){
            if(i % 2 == 0){
                player1.hand.push(this.deckOfCards[i]);
            }else{
                player2.hand.push(this.deckOfCards[i]);
            }
            this.deckOfCards.pop();
        };
    };
};


class Player{                 
    constructor(){
        this.hand = [];
        this.score = 0;
    };
};

function playCards(firstPlayer, secondPlayer){      
    let scoreString = [""];                         
    for (let i = 0; i<= 25; i++){
        if (firstPlayer.hand[i].value > secondPlayer.hand[i].value){
            firstPlayer.score++;
            let y = `Round ${i+1})  Player 1 wins round:  ${firstPlayer.hand[i].describe()}  beats  ${secondPlayer.hand[i].describe()} `;
            
            scoreString.push(y);
        }else if(secondPlayer.hand[i].value > firstPlayer.hand[i].value){
            secondPlayer.score++;
            let x = `Round ${i+1})  Player 2 wins round:  ${secondPlayer.hand[i].describe()}  beats  ${firstPlayer.hand[i].describe()} `;
            
            scoreString.push(x);
        }else{
            let z = `Round ${i+1})  Tie:  ${firstPlayer.hand[i].describe()}  is the same as  ${secondPlayer.hand[i].describe()} `;

            scoreString.push(z);
        };
    };
    
alert(` 
Game Over!  
Final Score:    
Player 1:  ${firstPlayer.score}
Player 2:  ${secondPlayer.score}
Round Recap:
${scoreString.join("\n")}
`);
};


let player1 = new Player();
let player2 = new Player();
let myDeck = new Deck();


myDeck.createDeckOfCards();
myDeck.shuffleCards(myDeck.deckOfCards);
console.log(myDeck.deckOfCards);
myDeck.dealCards(myDeck.deckOfCards);
console.log(player1.hand);
console.log(player2.hand);
playCards(player1, player2);
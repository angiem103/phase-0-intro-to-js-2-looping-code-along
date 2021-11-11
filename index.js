
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i< gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

let message = []

function writeCards(names, party) {
   for (let i = 0; i < names.length; i++){
   message.push(`Thank you, ${names[i]}, for the wonderful ${party} gift!`)
    }
    return message
}

function countDown() {
    let number = 10
    while (number >= 0) {
        console.log(number--)
    }
}

const names = ["Angie", "Jackie", "Robert"]
const event = ["surprise"]

function writeCards(names,event) {
    let note = [];
    for (let i = 0; i < names.length; i++) {
    let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    note.push(message)};
    return note;

}

function countDown(){
    let number = 0
    while (number <11) {
        console.log(number++)}
}

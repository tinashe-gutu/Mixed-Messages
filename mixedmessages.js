
const generateRandomMessage = (num) => {


}

const mixedMessages = {
    time: [['Today'], ['Tomorrow'], ['This Week']],
    affirmative: [['you will'],['you wont'], ['you might'] ],
    event: [['fall in love.'], ['recieve a once in a life time offer.'], ['get arrested.']]
}

const randomNum = () => {
    num = Math.floor((Math.random())*3)
    return num
}

const createMessage = () =>{
    const arrOfMessage = []
    const when = mixedMessages.time[randomNum()];
    console.log(when)
    const affirm = mixedMessages.affirmative[randomNum()];
    const what = mixedMessages.event[randomNum()];
    arrOfMessage.push(when,affirm,what);
    return arrOfMessage;
}
console.log(createMessage());
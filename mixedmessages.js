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
    for(messagePart in mixedMessages){
        arrOfMessage.push(mixedMessages[messagePart][randomNum()])
    }
    return arrOfMessage.join(' ');
}

console.log(createMessage());
const mixedMessages = {
    time: [['Today'], ['Tomorrow'], ['This Week'], 
            ["January 29th"], ["At this Exact Moment"]],
    affirmative: [['you will'],['you wont'], ['you might'], ["you are certain to"] ],
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
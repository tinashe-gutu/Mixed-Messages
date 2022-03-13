const mixedMessages = {
    time: [['Today'], ['Tomorrow'], ['This Week'], 
            ["January 29th,"], ["At this Exact Moment"]],
    affirmative: [['you will'],['you wont'], ['you might'], ["you are certain to"] ],
    event: [['fall in love.'], ['recieve a once in a life time offer.'], ['get arrested.']]
}

const randomNum = (num) => {
    const randomNum = Math.floor((Math.random())*num)
    return randomNum
}

const createMessage = () =>{
    const arrOfMessage = []
    for(messagePart in mixedMessages){
        const randomNm=randomNum(mixedMessages[messagePart].length)
        const randomMsg=mixedMessages[messagePart][randomNm];
        arrOfMessage.push(randomMsg);
    }
    return arrOfMessage.join(' ');
}

console.log(createMessage());
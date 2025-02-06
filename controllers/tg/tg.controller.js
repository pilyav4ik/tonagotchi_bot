const tgBotService = require('../../service/tgbot.service')


class TgController {

    async getReduceEatTimerByOneHour(req, res) {
        let result = await tgBotService.reduceTimer("Reduce eat timer by 1 hours", 'Description 1 hours', 'Price Label', 50)
        if (result) {
            res.json({success:true, data:result})
        }
        else {
            res.json({success:false, message: `Can't get invoice link: ${result}`})
        }
    }

    async getReduceEatTimerByThreeHours(req, res) {
        let result = await tgBotService.reduceTimer("Reduce eat timer by 3 hours", 'Description 3 hours', 'Price Label', 100)
        if (result) {
            res.json({success:true, data:result})
        }
        else {
            res.json({success:false, message: `Can't get invoice link: ${result}`})
        }
    }

    async getReduceEatTimerByEightHours(req, res) {
        let result = await tgBotService.reduceTimer("Reduce eat timer by 8 hours", 'Description 8 hours', 'Price Label', 150)
        if (result) {
            res.json({success:true, data:result})
        }
        else {
            res.json({success:false, message: `Can't get invoice link: ${result}`})
        }
    }


/*Play */

async getReducePlayTimerByOneHour(req, res) {
    let result = await tgBotService.reduceTimer("Reduce play timer by 1 hours", 'Description 1 hours', 'Price Label', 50)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getReducePlayTimerByThreeHours(req, res) {
    let result = await tgBotService.reduceTimer("Reduce play timer by 3 hours", 'Description 3 hours', 'Price Label', 100)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getReducePlayTimerByEightHours(req, res) {
    let result = await tgBotService.reduceTimer("Reduce play timer by 8 hours", 'Description 8 hours', 'Price Label', 150)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

/* Walk */

async getReduceWalkTimerByOneHour(req, res) {
    let result = await tgBotService.reduceTimer("Reduce walk timer by 1 hours", 'Description 1 hours', 'Price Label', 50)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getReduceWalkTimerByThreeHours(req, res) {
    let result = await tgBotService.reduceTimer("Reduce walk timer by 3 hours", 'Description 3 hours', 'Price Label', 100)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getReduceWalkTimerByEightHours(req, res) {
    let result = await tgBotService.reduceTimer("Reduce walk timer by 8 hours", 'Description 8 hours', 'Price Label', 150)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}


/* Sleep */

async getReduceSleepTimerByOneHour(req, res) {
    let result = await tgBotService.reduceTimer("Reduce sleep timer by 1 hours", 'Description 1 hours', 'Price Label', 50)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getReduceSleepTimerByThreeHours(req, res) {
    let result = await tgBotService.reduceTimer("Reduce sleep timer by 3 hours", 'Description 3 hours', 'Price Label', 100)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getReduceSleepTimerByEightHours(req, res) {
    let result = await tgBotService.reduceTimer("Reduce sleep timer by 8 hours", 'Description 8 hours', 'Price Label', 150)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}


async getPromotionOne(req, res) {
    let result = await tgBotService.reduceTimer("Main Action", 'Description', 'Price Label', 500)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}

async getPromotionTwo(req, res) {
    let result = await tgBotService.reduceTimer("Two Action", 'Description', 'Price Label', 1000)
    if (result) {
        res.json({success:true, data:result})
    }
    else {
        res.json({success:false, message: `Can't get invoice link: ${result}`})
    }
}
}

module.exports = new TgController()
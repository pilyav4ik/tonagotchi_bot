const Router = require('express')
const router = new Router()
const tgController = require('../controllers/tg/tg.controller')


router.post('/getFoodInvoiceLinkOneHour', tgController.getReduceEatTimerByOneHour)
router.post('/getFoodInvoiceLinkThreeHour', tgController.getReduceEatTimerByThreeHours)
router.post('/getFoodInvoiceLinkEightHour', tgController.getReduceEatTimerByEightHours)

router.post('/getPlayInvoiceLinkOneHour', tgController.getReducePlayTimerByOneHour)
router.post('/getPlayInvoiceLinkThreeHour', tgController.getReducePlayTimerByThreeHours)
router.post('/getPlayInvoiceLinkEightHour', tgController.getReducePlayTimerByEightHours)

router.post('/getWalkInvoiceLinkOneHour', tgController.getReduceWalkTimerByOneHour)
router.post('/getWalkInvoiceLinkThreeHour', tgController.getReduceWalkTimerByThreeHours)
router.post('/getWalkInvoiceLinkEightHour', tgController.getReduceWalkTimerByEightHours)

router.post('/getSleepInvoiceLinkOneHour', tgController.getReduceSleepTimerByOneHour)
router.post('/getSleepInvoiceLinkThreeHour', tgController.getReduceSleepTimerByThreeHours)
router.post('/getSleepInvoiceLinkEightHour', tgController.getReduceSleepTimerByEightHours)

router.post('/getPromotionOne', tgController.getPromotionOne)
router.post('/getPromotionTwo', tgController.getPromotionTwo)

module.exports = router
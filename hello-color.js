const beep = require("beepbeep")
const logger = require('node-color-log')

logger.setLevel("info")

logger.color("cyan").log("Single beep by cian") 
beep()
logger.color("red").log("Double beep by red") 
beep(2)
logger.color("blue").log("Triple beep by blue") 
beep(3)
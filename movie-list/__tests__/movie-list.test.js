// destructer
const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const {addMovie} = require('../addMovie.js')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('')
})

afterAll(async () => {
    await driver.quit()
})

TextDecoderStream('Add a movie', async () => {

    await addMovie(driver)
    await driver.sleep(2000)
})
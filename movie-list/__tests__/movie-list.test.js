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

test('Add a movie', async)
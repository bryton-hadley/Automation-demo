const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(2000)

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

module.exports = {

    addMovie
}

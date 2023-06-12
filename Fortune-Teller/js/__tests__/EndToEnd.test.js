/**
 * @jest-environment puppeteer
 */

describe('Basic user flow for Website', () => {
    // First, visit the website
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/');
    });
  
    // Next, Click on the black cat logo to check if it switches to the option page
    it('Clicking the black cat logo', async () => {
      console.log('Waiting to click the black logo');
      // Query select the black cat logo
      const blackCatLogo = await page.$('#landing-logo');
      
    
      // Once you have the button, you can click it
      await blackCatLogo.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the option.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/option.html');
    });

    // Next, Click on Tarot card button
    it('Clicking the Tarot card button', async () => {
      console.log('Waiting to click the Tarot Card button');
      // Query select the tarot card button
      const tarotCardBtn = await page.$('#Tarot-card-button');
      
    
      // Once you have the button, you can click it
      await tarotCardBtn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the select-tarot.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/select-tarot.html');
    });

    // Next, Click on Yes/No button
    it('Clicking the Yes/No button', async () => {
      console.log('Waiting to click the Yes/No button');
      // Query select the Yes/No card button
      const yesNoBtn = await page.$('#yesno-button');
      
    
      // Once you have the button, you can click it
      await yesNoBtn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the cards.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/cards.html');
    });


   

    //Click the black cat logo to return to home screen
    it('Clicking the black cat logo', async () => {
      console.log('Waiting to click the Black cat button');
      // Query select the black cat button
      const blackCatBtn = await page.$('#black-cat-button');
      
    
      // Once you have the button, you can click it
      await blackCatBtn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the index.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/index.html');
    });

    // Next, Click on the black cat logo to check if it switches to the option page
    it('Clicking the black cat logo 2', async () => {
      console.log('Waiting to click the black logo');
      // Query select the black cat logo
      const blackCatLogo = await page.$('#landing-logo');
      
    
      // Once you have the button, you can click it
      await blackCatLogo.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the option.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/option.html');
    });

    // Next, Click on Tarot card button
    it('Clicking the Tarot card button', async () => {
      console.log('Waiting to click the Tarot Card button');
      // Query select the tarot card button
      const tarotCardBtn = await page.$('#Tarot-card-button');
      
    
      // Once you have the button, you can click it
      await tarotCardBtn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the select-tarot.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/select-tarot.html');
    });

    // Next, Click on Career reading button
    it('Clicking the career reading button', async () => {
      console.log('Waiting to click the Career reading button');
      // Query select the career reading button
      const Btn = await page.$('#Career-reading-button');
      
    
      // Once you have the button, you can click it
      await Btn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the cards2.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/cards2.html');
    });

    //Click the black cat logo to return to home screen 2
    it('Clicking the black cat logo 2', async () => {
      console.log('Waiting to click the Black cat button');
      // Query select the black cat button
      const blackCatBtn = await page.$('#black-cat-button');
      
    
      // Once you have the button, you can click it
      await blackCatBtn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the index.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/index.html');
    });

    // Next, Click on the black cat logo to check if it switches to the option page
    it('Clicking the black cat logo 3', async () => {
      console.log('Waiting to click the black cat logo');
      // Query select the black cat logo
      const blackCatLogo = await page.$('#landing-logo');
      
    
      // Once you have the button, you can click it
      await blackCatLogo.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the option.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/option.html');
    });
    // Next, Click on Zodiac reading button
    it('Clicking the zodiac reading button', async () => {
      console.log('Waiting to click the zodiac reading button');
      // Query select the Zodiac reading button
      const Btn = await page.$('#Zodiac-button');
      
    
      // Once you have the button, you can click it
      await Btn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the zodiac.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/zodiac.html');
    });

    // Next, Click on Settings button
    it('Clicking the Settings button', async () => {
      console.log('Waiting to click the Settings button');
      // Query select the Settings button
      const Btn = await page.$('#Settings-button');
      
    
      // Once you have the button, you can click it
      await Btn.click();

      await page.waitForNavigation();

      let currentDomain = page.url();

      // Expect page to be the settings.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/settings.html');
    });
    
  });
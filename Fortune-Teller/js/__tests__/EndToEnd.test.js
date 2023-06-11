import '@testing-library/jest-dom/extend-expect';

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

  });
describe('Basic user flow for Website', () => {
    // First, visit the website
    beforeAll(async () => {
      await page.goto('http://localhost:80/Fortune-Teller/');
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
      expect(currentDomain).toBe('http://localhost:80/Fortune-Teller/option.html');
    });

  });
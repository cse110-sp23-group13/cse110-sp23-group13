describe('Basic user flow for Website', () => {
    // First, visit the website
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/');
    });
  
    // Next, Click on the black cat logo to check if it switches to the option page
    it('Clicking the black cat logo', async () => {
      console.log('Waiting to click the black logo');
      // Query select the black cat logo
      const blackCatLogo = await page.$('.clicker');
      
    
      // Once you have the button, you can click it and check the innerText property of the button.
      await blackCatLogo.click();

      let currentDomain = window.location.href;

      // Expect page to be the option.html page
      expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/option.html');
    });

    // We are in the option.html page, now we want to test the tarot cards button
    it('Clicking the black cat logo', async () => {
        console.log('Waiting to click the tarot cards button');
        // Query select the tarot card button
        const blackCatLogo = await page.$('clicker');
        
      
        // Once you have the button, you can click it and check the innerText property of the button.
        await blackCatLogo.click();
  
        let currentDomain = window.location.origin;
  
        // Expect page to be the option.html page
        expect(currentDomain).toBe('https://cse110-sp23-group13.github.io/cse110-sp23-group13/Fortune-Teller/option.html');
      });
  
    // Check to make sure that all 20 <product-item> elements have data in them
    it('Make sure <product-item> elements are populated', async () => {
      console.log('Checking to make sure <product-item> elements are populated...');
      // Start as true, if any don't have data, swap to false
      let allArePopulated = true;
      let data, plainValue;
      // Query select all of the <product-item> elements
      const prodItems = await page.$$('product-item');
      console.log(`Checking product item 1/${prodItems.length}`);
      // Grab the .data property of <product-items> to grab all of the json data stored inside
      data = await prodItems[0].getProperty('data');
      // Convert that property to JSON
      plainValue = await data.jsonValue();
      // Make sure the title, price, and image are populated in the JSON
      if (plainValue.title.length == 0) { allArePopulated = false; }
      if (plainValue.price.length == 0) { allArePopulated = false; }
      if (plainValue.image.length == 0) { allArePopulated = false; }
      // Expect allArePopulated to still be true
      expect(allArePopulated).toBe(true);
  
      // TODO - Step 1
      // Right now this function is only checking the first <product-item> it found, make it so that
      // it checks every <product-item> it found
      let i = 1
      while(i < prodItems.length) {
        // Start as true, if any don't have data, swap to false
        allArePopulated = true;
        data = await prodItems[i].getProperty('data');
        plainValue = await data.jsonValue();
        if (plainValue.title.length == 0) { allArePopulated = false; }
        if (plainValue.price.length == 0) { allArePopulated = false; }
        if (plainValue.image.length == 0) { allArePopulated = false; }
        // Expect allArePopulated to still be true
        expect(allArePopulated).toBe(true);
  
        //Go to the next product
        i++
      }
  
    }, 10000);
  
    // Check to make sure that when you click "Add to Cart" on the first <product-item> that
    // the button swaps to "Remove from Cart"
    it('Clicking the "Add to Cart" button should change button text', async () => {
      console.log('Checking the "Add to Cart" button...');
      // TODO - Step 2
      // Query a <product-item> element using puppeteer ( checkout page.$() and page.$$() in the docs )
      let prodItem1 = await page.$('product-item');
      //console.log(btn);
  
  
      // Grab the shadowRoot of that element (it's a property), then query a button from that shadowRoot.
      let shadowRoot = await prodItem1.getProperty('shadowRoot');
      let btn = await shadowRoot.$('button');
      // Once you have the button, you can click it and check the innerText property of the button.
      await btn.click();
  
      let innerText = await btn.getProperty('innerText');
      // Once you have the innerText property, use innerText.jsonValue() to get the text value of it
      innerText = await innerText.jsonValue();
      // Expect innerText to be "Remove from Cart"
      expect(innerText).toBe("Remove from Cart");
     
  
    }, 2500);
  
    // Check to make sure that after clicking "Add to Cart" on every <product-item> that the Cart
    // number in the top right has been correctly updated
    it('Checking number of items in cart on screen', async () => {
      console.log('Checking number of items in cart on screen...');
      // TODO - Step 3
      // Query select all of the <product-item> elements, then for every single product element
      
      let prodItems = await page.$$('product-item');
      let prodItem1 = await prodItems[0].getProperty('shadowRoot');
      let btn1 = await prodItem1.$('button');
      await btn1.click();
      // get the shadowRoot and query select the button inside, and click on it.
      for(let i=0; i<prodItems.length; i++) {
        let shadowRoot = await prodItems[i].getProperty('shadowRoot');
        let btn = await shadowRoot.$('button');
        await btn.click()
      }
      // Check to see if the innerText of #cart-count is 20
      let cartCount = await page.$('#cart-count');
      let count = await (await cartCount.getProperty('innerText')).jsonValue();
      expect(count==="20").toBe(true);
    }, 10000);
  
    // Check to make sure that after you reload the page it remembers all of the items in your cart
    it('Checking number of items in cart on screen after reload', async () => {
      console.log('Checking number of items in cart on screen after reload...');
      // TODO - Step 4
      // Reload the page, then select all of the <product-item> elements, and check every
      await page.reload();
      let prodItems = await page.$('product-item');
      // element to make sure that all of their buttons say "Remove from Cart".
      for(let i=0; i<prodItems.length; i++) {
        let shadowRoot = await prodItems[i].getProperty('shadowRoot');
        let btn = await shadowRoot.$('button');
        await btn.click()
        let innerText = await btn.getProperty('innerText');
        // Once you have the innerText property, use innerText.jsonValue() to get the text value of it
        innerText = await innerText.jsonValue();
        // Expect innerText to be "Remove from Cart"
        expect(innerText).toBe("Remove from Cart");
      }
      // Also check to make sure that #cart-count is still 20
    }, 10000);
  
    // Check to make sure that the cart in localStorage is what you expect
    it('Checking the localStorage to make sure cart is correct', async () => {
      // TODO - Step 5
      // At this point he item 'cart' in localStorage should be 
      // '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]', check to make sure it is
      let cart = await page.evaluate(() => {
        return localStorage.getItem("cart")
      });
      expect(cart).toBe('[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]')
    });
  
    // Checking to make sure that if you remove all of the items from the cart that the cart
    // number in the top right of the screen is 0
    it('Checking number of items in cart on screen after removing from cart', async () => {
      console.log('Checking number of items in cart on screen...');
      // TODO - Step 6
      // Go through and click "Remove from Cart" on every single <product-item>, just like above.
      let prodItems = await page.$$("product-item");
      for(let i=0; i<prodItems.length; i++) {
        let shadowRoot = await prodItems[i].getProperty('shadowRoot');
        let btn = await shadowRoot.$('button');
        
        await btn.click();
      }
      // Once you have, check to make sure that #cart-count is now 0
      let cartCount = await page.$("#cart-count");
      let count = await cartCount.getProperty("innerText");
      count = await count.jsonValue();
      expect(count).toBe('0');
  
  
    }, 10000);
  
    // Checking to make sure that it remembers us removing everything from the cart
    // after we refresh the page
    it('Checking number of items in cart on screen after reload', async () => {
      console.log('Checking number of items in cart on screen after reload...');
      // TODO - Step 7
      // Reload the page once more, then go through each <product-item> to make sure that it has remembered nothing
      await page.reload();
      // is in the cart - do this by checking the text on the buttons so that they should say "Add to Cart".
      let prodItems = await page.$$("product-item");
      for(let i=0; i<prodItems.length; i++) {
        let shadowRoot = await prodItems[i].getProperty('shadowRoot');
        let btn = await shadowRoot.$('button');
        let innerText = await btn.getProperty('innerText');
        // Once you have the innerText property, use innerText.jsonValue() to get the text value of it
        innerText = await innerText.jsonValue();
        // Expect innerText to be "Remove from Cart"
        expect(innerText).toBe("Add to Cart");
      }
  
      // Also check to make sure that #cart-count is still 0
      let cartCount = await page.$("#cart-count");
      let count = await cartCount.getProperty("innerText");
      count = await count.jsonValue();
      expect(count).toBe('0');
    }, 10000);
  
    // Checking to make sure that localStorage for the cart is as we'd expect for the
    // cart being empty
    it('Checking the localStorage to make sure cart is correct', async () => {
      console.log('Checking the localStorage...');
      // TODO - Step 8
      // At this point he item 'cart' in localStorage should be '[]', check to make sure it is
      let cart = await page.evaluate(() => {
        return localStorage.getItem("cart");
      })
      expect(cart).toBe('[]');
    });
  });
/**
 * @jest-environment jsdom
 */

//Import functions from zodiac.js
const { findZodiacSign } = require('./zodiac');

//Tests for findZodiacSign() method
describe("findZodiacSign", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="birth-date" type="date" />
      <div id="result"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  //Capricorn Test
  test("Displays correct zodiac sign and information: Capricorn", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1469-01-08"; // Valid birth date for Capricorn

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Capricorn");
    expect(resultElement.innerHTML).toContain("Sign Type: Earth");
    expect(resultElement.innerHTML).toContain("can be so absorbed in their own internal monologue");   
  });

  //Aquarius Test
  test("Displays correct zodiac sign and information: Aquarius", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "2002-02-16"; // Valid birth date for Aquarius

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Aquarius");
    expect(resultElement.innerHTML).toContain("Sign Type: Air");
    expect(resultElement.innerHTML).toContain("Aquarians are archetypal outcasts.");   
  });

  //Pisces Test
  test("Displays correct zodiac sign and information: Pisces", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1772-03-14"; // Valid birth date for Pisces

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Pisces");
    expect(resultElement.innerHTML).toContain("Sign Type: Water");
    expect(resultElement.innerHTML).toContain("diluting themselves with larger personalities to avoid having");   
  });

  //Aries Test
  test("Displays correct zodiac sign and information: Aries", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "2002-04-19"; // Valid birth date for Aries

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Aries");
    expect(resultElement.innerHTML).toContain("Sign Type: Fire");
    expect(resultElement.innerHTML).toContain("They naturally take charge because they are good at initiating new projects.");   
  });

  //Taurus Test
  test("Displays correct zodiac sign and information: Taurus", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "2002-04-21"; // Valid birth date for Taurus

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Taurus");
    expect(resultElement.innerHTML).toContain("Sign Type: Earth");
    expect(resultElement.innerHTML).toContain("Tauruses are the human equivalent of moss. A handmade wooden chair.");   
  });

  //Gemini Test
  test("Displays correct zodiac sign and information: Gemini", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1619-05-23"; // Valid birth date for Gemini

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Gemini");
    expect(resultElement.innerHTML).toContain("Sign Type: Air");
    expect(resultElement.innerHTML).toContain("Geminis have an uncanny ability to size up a person's");   
  });

  //Cancer Test
  test("Displays correct zodiac sign and information: Cancer", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1980-07-09"; // Valid birth date for Cancer

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Cancer");
    expect(resultElement.innerHTML).toContain("Sign Type: Water");
    expect(resultElement.innerHTML).toContain("A Cancer's personality is like wading chest deep in a lake of warm water. It feels sparkling and cool");   
  });

  //Leo Test
  test("Displays correct zodiac sign and information: Leo", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1912-08-08"; // Valid birth date for Leo

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Leo");
    expect(resultElement.innerHTML).toContain("Sign Type: Fire");
    expect(resultElement.innerHTML).toContain("They can dazzle with the theatrical flair of a Broadway star and the charisma");  
  });

  //Virgo Test
  test("Displays correct zodiac sign and information: Virgo", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "2007-09-01"; // Valid birth date for Virgo

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Virgo");
    expect(resultElement.innerHTML).toContain("Sign Type: Earth");
    expect(resultElement.innerHTML).toContain("They are known for their attention to detail, which helps them find patterns where there are none.");  
  });

  //Libra Test
  test("Displays correct zodiac sign and information: Libra", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "2002-09-27"; // Valid birth date for Libra

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Libra");
    expect(resultElement.innerHTML).toContain("Sign Type: Air");
    expect(resultElement.innerHTML).toContain("Libras are difficult to really understand because they seem so contradictory.");  
  });

  //Scorpio Test
  test("Displays correct zodiac sign and information: Scorpio", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1869-10-31"; // Valid birth date for Scorpio

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Scorpio");
    expect(resultElement.innerHTML).toContain("Sign Type: Water");
    expect(resultElement.innerHTML).toContain("They are difficult people to get to know because they are psychological trap doors.");  
  });

  //Sagittarius Test
  test("Displays correct zodiac sign and information: Sagittarius", () => {
    // Set the birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "1869-12-10"; // Valid birth date for Sagittarius

    findZodiacSign();

    // Check if the result is displayed correctly
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Your zodiac is: Sagittarius");
    expect(resultElement.innerHTML).toContain("Sign Type: Fire");
    expect(resultElement.innerHTML).toContain("philosophy to philosophy, belief to belief. They are explorers of");  
  });

  //Invalid birth date test
  test("Displays error message for an invalid birth date", () => {
    // Setting an invalid birth date input value
    const birthDateInput = document.getElementById("birth-date");
    birthDateInput.value = "2069-13-45"; // Invalid date

    findZodiacSign();

    
    const resultElement = document.getElementById("result");
    expect(resultElement.innerHTML).toContain("Please enter a valid birth date.");
  });
});


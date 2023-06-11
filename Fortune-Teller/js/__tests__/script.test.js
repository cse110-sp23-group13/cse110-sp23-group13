
import '@testing-library/jest-dom/extend-expect';

const {
    preloadCards,
    createTitle,
    createCardDescription,
    isYesNoQuestion,
} = require('../script.js');
const script = require('../script.js')
const { cardPaths } = require('../../text/cardPaths.js')
const { yesCards, noCards, yesAnswers, noAnswers } = require('../../text/yesNoDescriptions')


describe('script.js', () => {
    var selectedCard = null;
    var bottomCardContainer = null;
    var container = null;
    var isCardSelected = false; 
    var textEnabled = true;
    var currCard = null;

    // Clear the DOM and reset variables before each test
    beforeEach(() => {
        document.body.innerHTML = '';
        selectedCard = null;
        bottomCardContainer = null;
        container = null;
        isCardSelected = false;
        textEnabled = true;
        currCard = null;
    });

    describe('preloadCards', () => {
        test('should preload card images', () => {
          // Arrange
          const originalImage = global.Image;
    
          // Mock the Image constructor
          global.Image = jest.fn();
    
          // Act
          preloadCards(cardPaths);
    
          // Assert
          expect(global.Image).toHaveBeenCalledTimes(cardPaths.length);
          expect(global.Image.mock.instances[0].src).toBe("./images/themagician.png");
          expect(global.Image.mock.instances[1].src).toBe("./images/temperance.png");
    
          // Restore the original Image constructor
          global.Image = originalImage;
        });
      });


          describe('createTitle', () => {
            test('should create a title element with random "Yes" or "No" text', () => {
              // Arrange
              const createElementMock = jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
                if (tagName === 'h1') {
                  return {
                    textContent: '',
                  };
                }
                return null;
              });
          
              const randomMock = jest.spyOn(Math, 'random').mockReturnValue(0.25);
          
              // Act
              const result = createTitle();
          
              // Assert
              expect(createElementMock).toHaveBeenCalledTimes(1);
              expect(createElementMock).toHaveBeenCalledWith('h1');
              expect(result.textContent).toBe('Yes');
          
              // Clean up
              createElementMock.mockRestore();
              randomMock.mockRestore();
            });
          });

          describe('createCardDescription', () => {
            test('should create a card description element with the correct text for "Yes"', () => {
              // Arrange
              const title = document.createElement('h1');
              title.textContent = 'Yes';
              const cardIdx = 0;
              const createElementMock = jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
                if (tagName === 'p') {
                  return {
                    textContent: '',
                  };
                }
                return null;
              });
          
              // Act
              const result = createCardDescription(title, cardIdx);
          
              // Assert
              expect(createElementMock).toHaveBeenCalledTimes(1);
              expect(createElementMock).toHaveBeenCalledWith('p');
              expect(result.textContent).toBe(yesAnswers[cardIdx]);
          
              // Clean up
              createElementMock.mockRestore();
            });
          
            test('should create a card description element with the correct text for "No"', () => {
              // Arrange
              const cardIdx = 0;
              const title = document.createElement('h1');
              title.textContent = 'No';
              const createElementMock = jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
                if (tagName === 'p') {
                  return {
                    textContent: '',
                  };
                }
                return null;
              });
          
              // Act
              const result = createCardDescription(title, cardIdx);
          
              // Assert
              expect(createElementMock).toHaveBeenCalledTimes(1);
              expect(createElementMock).toHaveBeenCalledWith('p');
              expect(result.textContent).toBe(noAnswers[cardIdx]);
          
              // Clean up
              createElementMock.mockRestore();
            });
          });
          describe('isYesNoQuestion', () => {
            test('should return true for a valid yes/no question', () => {
              // Arrange
              const question = 'Is it raining?';
          
              // Act
              const result = isYesNoQuestion(question);
          
              // Assert
              expect(result).toBe(true);
            });
          
            test('should return false for a non-yes/no question', () => {
              // Arrange
              const question = 'What is the capital of France?';
          
              // Act
              const result = isYesNoQuestion(question);
          
              // Assert
              expect(result).toBe(false);
            });
          
            test('should return true for a valid yes/no question with leading/trailing spaces', () => {
              // Arrange
              const question = '  Will you be there?  ';
          
              // Act
              const result = isYesNoQuestion(question);
          
              // Assert
              expect(result).toBe(true);
            });
          
            test('should return true for a valid yes/no question with different capitalization', () => {
              // Arrange
              const question = 'dOES it Matter?';
          
              // Act
              const result = isYesNoQuestion(question);
          
              // Assert
              expect(result).toBe(true);
            });
          });   
})

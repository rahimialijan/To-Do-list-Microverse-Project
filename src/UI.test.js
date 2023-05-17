import UI from './modules/UI.js';

// Mock localStorage
jest.mock('./modules/localstorage.js', () => ({
  gettodoTasks: jest.fn(() => []),
  addtodoTask: jest.fn(),
}));

// Mock DOM manipulation methods
let mockElement = null;

jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
  if (selector === '#list-item') {
    mockElement = {
      appendChild: jest.fn(),
      childNodes: [],
    };
    return mockElement;
  }

  return null;
});

describe('UI class', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('addTaskToList', () => {
    test('should add a task to the list', () => {
      const todo = {
        desc: 'Test Task',
        completed: false,
      };

      UI.addTaskToList(todo);

      expect(document.querySelector).toHaveBeenCalledTimes(1);
      expect(document.querySelector).toHaveBeenCalledWith('#list-item');
      expect(mockElement.appendChild).toHaveBeenCalledTimes(1);
      expect(mockElement.appendChild).toHaveBeenCalledWith(expect.any(Element));
    });
  });
  
});
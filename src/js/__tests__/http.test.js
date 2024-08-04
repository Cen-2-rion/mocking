import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');
jest.mock('../app');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should throw an error when called with mock fetchData', () => {
  // передаём в fetchData невалидное значение
  fetchData.mockImplementation(() => {
    throw new Error('Mock this!');
  });

  // передаём в getLevel невалидное значение
  getLevel.mockImplementation(() => {
    fetchData(); // вызываем fetchData
  });

  expect(() => {
    getLevel(1); // вызываем getLevel с моковым fetchData
  }).toThrow('Mock this!'); // ожидаем, что вызов fetchData выбросит ошибку
});

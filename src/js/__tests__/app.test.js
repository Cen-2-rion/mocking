import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http'); // сообщаем что этот файл должен стать моком

// сбрасываем моки после каждого теста
afterEach(() => {
  jest.resetAllMocks();
});

// проверочные тесты
test('should call fetchData', () => {
  fetchData.mockReturnValue({}); // моким fetchData и вызываем её с аргументом
  getLevel(1); // вызываем функцию с userId

  expect(fetchData).toHaveBeenCalledTimes(1);
});

test('should return level message', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });

  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('should return error message when status is not ok', () => {
  fetchData.mockReturnValue({ status: 'error', level: 1 }); // настраиваем мок fetchData на ошибку

  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});

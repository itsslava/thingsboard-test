/*
у меня есть статичный объект с определенными координатами, будем считать, что это центр. если движущийся объект будет находиться в пределах 30 метров от статичной точки, нужно отправлять в консоль команду "точка в пределах 30 метров". напиши, пожалуйста, код для реализации этой задачи используя Java Script
*/

/* Вот пример кода на JavaScript, который позволяет проверить, находится ли движущийся объект в пределах 30 метров от статической точки с определенными координатами:
*/

// Координаты статической точки (центра)
const centerLat = 55.099517;
const centerLng = 36.610007;

// Функция для вычисления расстояния между двумя точками на поверхности Земли
// Возвращает расстояние в метрах
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371000; // радиус Земли в метрах
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

// Перевод градусов в радианы
const toRadians = (degrees) => degrees * Math.PI / 180;

// Функция для проверки, находится ли движущийся объект в пределах 30 метров от статической точки
// Возвращает true, если объект находится в пределах 30 метров от центра, и false в противном случае
const checkIfWithin30Meters = (lat, lng) => {
  const distance = getDistance(centerLat, centerLng, lat, lng);
  return distance <= 30;
};

// Пример использования функции
const movingObjectLat = 55.099637;
const movingObjectLng = 36.609991;
const isWithin30Meters = checkIfWithin30Meters(movingObjectLat, movingObjectLng);

if (isWithin30Meters) {
  console.log("Точка в пределах 30 метров от центра");
} else {
  console.log("Точка находится дальше 30 метров от центра");
}

/*
Обратите внимание, что функция getDistance использует формулу гаверсинуса для вычисления расстояния между двумя точками на поверхности Земли. Результат вычислений будет в метрах. Функция checkIfWithin30Meters принимает координаты движущегося объекта и возвращает true, если объект находится в пределах 30 метров от статической точки, и false в противном случае.
*/

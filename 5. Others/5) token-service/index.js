/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  constructor() {
    this.token = null;
  }

  subscribe(callback) {
    return callback;
  }

  setToken(token) {
    this.subscribe(token);
  }

  removeToken() {
    this.subscribe(null);
    return null;
  }

  getToken() {
    return this.token;
  }
}

window.TokenService = TokenService;

export default TokenService;

import axios from 'axios';

const STATUS_CODE = {
  OK: 200,
  NOT_FOUND: 400,
  // define error code here
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class MainApi {
  static CATEGORIES_SHOW_TAG = {
    TOP: 'top',
    NEW: 'new',
  };
  static getGames = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/games.php`)
        .then(response => {
          const { status, data } = response || {};
          if (status === STATUS_CODE.OK) {
            if (data?.length) {
              resolve(data);
            } else {
              resolve([]);
            }
          }
        })
        .catch(error => {
          console.log('🚀 => error getGames', error);
          reject([]);
        });
    });
  };

  static getJackpots = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/jackpots.php`)
        .then(response => {
          const { status, data } = response || {};
          if (status === STATUS_CODE.OK) {
            if (data?.length) {
              resolve(data);
            } else {
              resolve([]);
            }
          }
        })
        .catch(error => {
          console.log('🚀 => error getGames', error);
          reject([]);
        });
    });
  };
}

export default MainApi;

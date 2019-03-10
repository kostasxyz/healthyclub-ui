export default class LocalStorage {
  constructor() {
    this.store = window.localStorage;
  }

  getAllRegData() {
    this.store.getItem('hc_reg_data');
  }

  getRegData(key) {
    this.store.getItem(key);
  }

  setRegData(key) {
    this.store.setItem(key);
  }
}

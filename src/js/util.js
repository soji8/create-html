export const xm = {
  getItem(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  setItem(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  },
  getToken() {
    return this.getItem('xm_token')
  },
  isLogin() {
    return this.getToken() ? true : false;
  },
  getUrlData() {
    let data =  window.location.hash ? 
      window.location.hash.slice(1).split('&') : 
      window.location.search.slice(1).split('&');

    let obj = {}

    for(let i in data) {
      let objItem = data[i].split('=');
      obj[objItem[0]] = objItem[1]
    }

    return obj;
  }
}
export default {
  s(selector = '') { //单个
    return document.querySelector(selector);
  },
  m(selector = '') {// 集合
    return document.querySelectorAll(selector);
  },
  id(id = '') {
    return document.getElementById(id);
  }

};
const Utils = {
  objToString(obj) {
    var str = '';
    for (var p in obj) {
      if (p === 'detail') {
        str = obj[p];
      } else {
        if (obj.hasOwnProperty(p)) {
          str += p + ' : ' + obj[p] + '\n';
        }
      }
    }
    return str;
  },
};

export default Utils;

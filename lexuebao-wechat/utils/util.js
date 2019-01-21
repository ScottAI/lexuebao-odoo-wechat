const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
var moment = require('../lib/moment-with-locales');
var Base64 = require('../lib/js-base64/we-base64');

function formatTime2(date, formatType) {
  moment.locale('zh_cn');
  formatType = typeof formatType == 'string' ? formatType : 'YYYY年MM月DD日 ';
  var res = moment(date).format(formatType);
  //console.log(res);
  return res;
}
function fromNow(date) {
  moment.locale('zh_cn');
  return moment(date).fromNow();
}
module.exports = {
  formatTime: formatTime2,
  fromNow: fromNow,
  Base64: Base64
}
import originJsonp from 'jsonp';

export const success = 0;

const options = {
  param: 'jsonpCallback'
}

const commonParams = {
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export default function jsonp(url, data) {

  if(commonParams && JSON.stringify(commonParams) != {}) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + params(commonParams);
  }

  if(data && JSON.stringify(data) != {}) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + params(data);
  }

  return new Promise((resolve, reject) => {
    originJsonp(url, options, (error, data) => {
      if (!error && data) {
        resolve(data);
      } else {
        reject(error);
      }
    })
  })
}

function params(data) {
  let url = '';
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value);
  }
  return url ? url.substring(1) : '';
}

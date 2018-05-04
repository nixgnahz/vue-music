import jsonp from './jsonp'

export default function getSwiper() {
  const url ='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = {
    g_tk:5381,
    platform:"h5",
    needNewCode:1,
    _:1515039362521
  }
  return jsonp(url, data)
}

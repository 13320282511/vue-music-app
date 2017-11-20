/**
 * Created by zj on 2017/8/31.
 */
import axios from 'axios'
export function get (url) {
  var result = axios.get(url)
  return result
}

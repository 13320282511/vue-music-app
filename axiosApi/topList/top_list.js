/**
 * Created by zj on 2017/8/31.
 */
import { get } from '../get'
export function getData () {
  const result = get('/api/toplist')
  return result
}

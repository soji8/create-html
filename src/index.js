import './css/common.less'
import { postRequest } from './js/ajax';
import { createdMock } from './js/mock';

createdMock('/test', {
  'list|1-10': [{
    'id|+1': 1,
    'name': '@cname'
  }]
})

postRequest('/test', {test: 1, test2:2}).then(res => {
  console.log(res)
})
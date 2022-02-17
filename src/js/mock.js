import Mock from 'mockjs';
import { baseURL } from './common'

export function createdMock(url, data) {
  Mock.mock(baseURL + url, data);
}

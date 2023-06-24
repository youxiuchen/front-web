import request from '@/utils/request'
console.log(request)
/**
 * 获取分类列表
 */

export const getCategory = () =>
  request({
    url: 'category'
  })

/**
 * 判断当前设备是否是移动设备 判断依据屏幕宽度是否小于一个指定宽度(1280)  或者设备类型判断
 * 
 * 
*/

import {computed} from 'vue'
import {PC_DEVICE_WIDTH} from '@/constants'

import { useWindowSize } from '@vueuse/core'
const {width} = useWindowSize()
export const isMobileTerminal = computed(()=>{
    return width.value < PC_DEVICE_WIDTH
})


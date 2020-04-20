import { COUNT, REMOVECOUNT, } from './action-type';

export interface COUNTaction{
    type: COUNT
    value: number
}

export interface REMOVECOUNTaction{
    type: REMOVECOUNT
    value: number
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
// 这里使用TypeScript的联合类型来表示所有可能的动作
export type ModifyAction = COUNTaction | REMOVECOUNTaction

export const addCount = (value:any):ModifyAction => {
    return {
        type: COUNT,
        value
    }
}

export const removeCount = (value:any):ModifyAction => {
    return {
        type : REMOVECOUNT,
        value
    }
}

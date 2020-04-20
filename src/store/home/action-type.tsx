export const COUNT = 'COUNT';
export type COUNT = typeof COUNT;  // typeof用于声明操作常量和推断类型

export const REMOVECOUNT = 'REMOVECOUNT';
export type REMOVECOUNT = typeof REMOVECOUNT;

export interface HState{
    count:number
}
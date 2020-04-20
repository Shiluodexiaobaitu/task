import React from 'react'

import './style.scss'
import Senior from '../senior'
import Customized from '../customized'
import PopupComponent from '../../components/popupComponent'

import {
    createFromIconfontCN
} from '@ant-design/icons';


interface IProps {

}
interface IState {
    styleProcessingState?: string,
    modalDisplayhiding?: boolean,
    modalState?: object
}

const Content = [
    {
        key: 1,
        data: '高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1高级文本1'
    },
    {
        key: 2,
        data: '高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2高级文本2'
    },
    {
        key: 3,
        data: '高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3高级文本3'
    },
    {
        key: 4,
        data: '高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4高级文本4'
    },
    {
        key: 5,
        data: '定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5定制文本5'
    },
    {
        key: 6,
        data: '定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6定制文本6'
    },
    {
        key: 7,
        data: '定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7定制文本7'
    },
    {
        key: 8,
        data: '定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8定制文本8'
    },
    {
        key: 9,
        data: '定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9定制文本9'
    },
    {
        key: 10,
        data: '高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10高级文本10'
    },
]


class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            styleProcessingState: 'SeniorAction', // 公共状态控制高级和定制版本的切换
            modalDisplayhiding: false,
            modalState: {}
        }
    }

    styleProcessingClick = (value: string) => {
        this.setState({
            styleProcessingState: value
        })
    }

    /**
     * 关闭全局弹窗
     */
    popupComponentEvent = (value:boolean) => {
        this.setState({
            modalDisplayhiding: value
        })
    }

    popupEvent = (value:any) => {
        const { styleProcessingState } = this.state
        let title = styleProcessingState === 'SeniorAction' ? "高级版" : "定制版"
        
        this.setState({
            modalDisplayhiding: true,
            modalState: {
                title: `${title}-标题${value}`,
                content: Content[value-1]
            }
        })
    }

    popupEventNo = () => {
    }

    renderingList = () => {
        const { styleProcessingState } = this.state
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1751879_6e8h32ob98d.js',
        });
        let arr: any[] = ['icon-ganga', 'icon-help', 'icon-kongxiangzi', 'icon-locate', 'icon-more', 'icon-more', 'icon-myline', 'icon-zhaohuo2normal', 'icon-zhaohuo2press', 'icon-gongju']
        let num: number[] = styleProcessingState === 'SeniorAction' ? [1, 2, 3, 4, 10] : [5, 6, 7, 8, 9]
        let condition: boolean
        let DOMnode = arr.map((item, index) => {
            condition =  num.includes(index + 1) ? true : false
            return <li key={index} onClick={ condition ? this.popupEvent.bind(this,index+1) : this.popupEventNo}>
                <IconFont type={item} style={{ fontSize: '20px',marginTop:'10px', color: condition ? 'rgb(228, 89, 114)' : ' rgb(136, 98, 105)' }} />
                <p style={{ color: condition ? 'rgb(228, 89, 114)' : ' rgb(136, 98, 105)' }}>标题{index + 1}</p>
            </li>
        })

        return DOMnode
    }

    render() {

        const { styleProcessingState, modalDisplayhiding, modalState } = this.state
        console.log()
        return <div className="box">
            {
                modalDisplayhiding && <PopupComponent popupComponentEvent={this.popupComponentEvent} data={modalState}/>
            }
            <div className="head">
                <Senior styleProcessingState={styleProcessingState} styleProcessingClick={this.styleProcessingClick.bind(this)} />
                <Customized styleProcessingState={styleProcessingState} styleProcessingClick={this.styleProcessingClick.bind(this)} />
            </div>

            <div className="content">
                <div className="content_top">
                    <span>{styleProcessingState === 'SeniorAction' ? '高级版' : '定制版'}</span>
                    <span>(适合<i>{styleProcessingState === 'SeniorAction' ? '独立摄影师' : '适合小型工作室'}</i>)</span>
                </div>

                <div className="content_list">
                    <ul>
                        {this.renderingList()}
                    </ul>
                </div>
            </div>

            <div className="tail">

            </div>
        </div>
    }
}

export default App
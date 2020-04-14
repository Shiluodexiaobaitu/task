import React from 'react';
import './style.scss'
import {
    createFromIconfontCN
} from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1751879_i8cl8ie9vs.js',
});

interface IProps {
    popupComponentEvent?: any,
    data?: any
}

class PopupComponent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            styleProcessingState: 'SeniorAction' // 公共状态控制高级和定制版本的切换
        }
    }
    close = () => {
        this.props.popupComponentEvent(false)
    }

    render() {
        const { title, content } = this.props.data
        const { data } = content
        return <div className='PopupComponent'>
            <div className="modal">
                <div className="modal_title">{ title }</div>
                <p className="modal_content">{ data }</p>
                <div className="modal_icon" onClick={this.close}>
                    <IconFont type="icon-close_icon" style={{ fontSize: '20px', color: '#fff' }} />
                </div>
            </div>
            <div className="mask"></div>。
        </div>
    }
}

export default PopupComponent
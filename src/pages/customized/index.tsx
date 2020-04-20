import React from 'react';
import './style.scss'

interface IProps {
    styleProcessingClick?: any  //主要这段代码
    styleProcessingState?: any
}

class Customized extends React.Component<IProps>{
    // constructor(props: IProps) {
    //     super(props)

    // }

    setColor = () => {
        this.props.styleProcessingClick('CustomizedAction')
    }

    render(){
        const {styleProcessingState} = this.props
        return <div className={styleProcessingState === 'CustomizedAction' ? 'customized' : 'customizedNo'} onClick={this.setColor}>
            <p>定制版</p>
            <p>适合小型工作室</p>
        </div>
    }
}

export default Customized
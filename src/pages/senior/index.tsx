import React from 'react';
import './style.scss'

interface IProps {
    styleProcessingClick?: any  //主要这段代码
    styleProcessingState?: any
}
interface IState {
    lg?: any

}

class Senior extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

    }

    setColor = () => {
        this.props.styleProcessingClick('SeniorAction')
    }

    render() {
        const {styleProcessingState} = this.props
        return <div className={styleProcessingState === 'SeniorAction' ? 'senior' : 'seniorNo'} onClick={this.setColor}>
            <p>高级版</p>
            <p>适合独立摄影师</p>
        </div>
    }
}

export default Senior
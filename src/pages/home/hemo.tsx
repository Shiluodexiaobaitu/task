import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCount, removeCount } from '../../store/home/action'

// 创建类型接口
export interface IProps {
    Homecount?: any
    // addCount?: void
    // removeCount?: void
    onCountAction?: any
}

class Home extends React.Component<IProps> {
    public constructor(props:IProps){
        super(props)
    }

    public componentDidMount() {
        console.log('this.props', this.props)
    }
    render() {
        const { Homecount} = this.props
        console.log(Homecount)
        return <div>
            Clicked: { Homecount } times
            <br/>
            <br/>
            <br/>
            <button onClick={()=>{this.props.onCountAction(addCount(1))}}>++</button>
            <button onClick={()=>{this.props.onCountAction(removeCount(1))}}>--</button>
        </div>
    }
}



export default connect((state: any): any => ({
    Homecount: state.HomeData.count
}),(dispatch:Dispatch)=>({
    onCountAction: dispatch
}) )(Home)
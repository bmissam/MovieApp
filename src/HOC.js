import React from 'react'
import Spin from './spinner.js'



const HOC = WrappedComponent => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                timeup: true
            }

            setTimeout(() =>
                this.setState({
                    timeup: false
                }), 2000)
            console.log(this.state.timeup)

        }
   
    render() {
        return this.state.timeup ? (
        <Spin/>)
        : (
            <WrappedComponent {...this.props} />
        )
            
    }

}
}

export default HOC 


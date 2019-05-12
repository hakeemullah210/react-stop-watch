import React,{Component} from 'react';

export default class Timer extends Component{
    constructor(){
        super();
        this.state={
            clock:0
        }
        this.ticker=this.ticker.bind(this);
    }
    ticker(){
        this.setState({clock:new Date-this.props.start})
    }
    componentDidMount(){
      this.timer=setInterval(this.ticker,1000)
    }
    render(){
        console.log(this.props.start)
        // const {clock}=this.state;
        var clock=Math.round(this.state.clock/1000)
        return(
            <div>
                <p>You have been on this site since: </p> <br/>
                <span>{clock}</span>  <br/>
                <p>Seconds.</p>
            </div>
        );
    }
}
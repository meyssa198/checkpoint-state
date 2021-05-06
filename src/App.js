import {Component} from 'react';
import './App.css';
import  React  from 'react';

class  App extends React.Component {
    state ={
    fullName :'Meyssa',
    bio:'IAG',
    imgSrc :"/images/mahleni.png",
    imgAlt:'my picture',
    profession:'Student',
    show : false,
    timer :0
    };
  handleClick=e=>{
    e.preventDefault();
    this.setState({...this.state,
      show:!this.state.show})
  }
  Increment = ()=>{
    this.setState(
      {...this.state,timer:this.state.timer+1}
    )
  }
  componentDidMount(){
    setInterval(this.Increment,1000)
  }
  render(){
  return (
    <div className="App" > 
    <button style={{
      marginTop:'5%',
      height:'30px',
      backgroundColor:'pink',
      border:'none',
      cursor:'pointer'
    }}
    onClick={this.handleClick}>button</button> 
    {this.state.show==true?<div style={{}}>
      <p>My name : {this.state.fullName}</p>
      <p>and I am : {this.state.profession}</p>
      <p>timer : {this.state.timer}</p>
      <img alt={this.state.imgAlt} src={this.state.imgSrc} 
      style={{
        height:'200px',width:'200px'
      }}/>
    </div>:<div></div>}    
    </div>
    
  );}
}

export default App;

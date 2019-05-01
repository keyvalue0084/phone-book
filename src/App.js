import React,{Component} from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';
import './App.css';

class App extends Component{
  id=2
  state={
    information:[
      {
        id:0,
        name:'이진우',
        phone:'010-6848-6136'
      },{
        id:1,
        name:'강유진',
        phone:'010-9582-8804'
      },
    ]
  }
  handleCreate=(data)=>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id:this.id++,...data})
    })
  }

  handleRemove =(id)=>{
    const {information} = this.state;
    this.setState({
      information: information.filter(info=>info.id !== id)
    })
  }

  handleUpdate = (id,data) =>{
    const{information} = this.state;
    this.setState({
      information:information.map(
        info => id === info.id
        ? {...info, ...data}
        : info
      )
    })
  }
  render(){
    const {information} = this.state;
    return(
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
      
    );
  }
}

export default App;

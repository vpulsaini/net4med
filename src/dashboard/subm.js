import axios from 'axios'
import React,{Component} from 'react'
import { ListGroup ,Row,Col,Container,Card,Accordion,Button,Form} from 'react-bootstrap'
import Select from 'react-select';
export class SubmCopy extends Component{
    constructor(props){
        super(props)
        
        this.state={
gender:'',
name:'',
mobile:'',
yearOfBirth:'',
healthId:'V'
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler =e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:4009/v1/search/searchByMobile',this.state).then((response)=>{
            console.log(response.data.healthId);
               this.setState({
            healthId:response.data.healthId
               })
            
        }).catch(error=>{
            console.log(error);
        })
    }
    options4=[
        { value: '11', label: 'Cash' },
        { value: '12', label: 'Card' },
        { value: '13', label: 'Cheque' },
    
      ]
      options11=[
        { value: '14', label: 'Gynaecologist Consultation' },
    
    
      ]
      options12 =[
        {value:'15',label:'Mr'},
        {value:'16',label:'Ms.'}
      ]
       dropdownIndicatorStyles = (base, state) => {
        let changes = {
          // all your override styles
          color: 'black'
        };
        return Object.assign(base, changes);
      };
    
    render(){
        const{gender,name,mobile,yearOfBirth}= this.state;
        return(
            <div>
              <form onSubmit={this.submitHandler}>
                  <div>
                      <input type="text" name="gender" value={gender} onChange={this.changeHandler}/>
                      {this.state.healthId}
                  </div>
                  <div>
                      <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                  </div>
                  <div>
                      <input type="text" name="mobile" value={mobile} onChange={this.changeHandler}/>
                  </div>
                  <div>
                      <input type="text" name="yearOfBirth" value={yearOfBirth} onChange={this.changeHandler}/>
                  </div>
                  <button type="submit">Submit</button>
                  </form>  
            </div>
        )
    }
}
export default SubmCopy;
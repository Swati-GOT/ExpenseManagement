import React, {Component} from 'react'
import './incomeComponent.css'

class IncomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           invalid:true,
           items:[]
        }

        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onHandleChange = e =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({amount: e.target.value})
        }
    }

    handleSubmit =(event) =>{
        
        if(!event.target.checkValidity()){
            this.setState({invalid:true})
            return
        }
        const form = event.target
        const data = new FormData(form)
        console.log("!!!!!",stringifyFormData(data))
        this.setState(prevState =>{
            return{
                items:prevState.items.concat(stringifyFormData(data)),
                invalid:false
            }
        },() => console.log("...........",this.state.items))

        event.preventDefault();
        event.target.reset();
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card card-width">
                    <div className="col-md-12">
                        <div className="card-header card-content">
                            <h4 className="card-title">Add Income</h4>
                        </div>
                        </div>
                        <div className="card-body card-content">
                            <form  onSubmit={this.handleSubmit}>
                                <table>
                                    <tr>
                                        <td><label >Income Type: </label></td>
                                        <td><input type="text" name="incomeType" /></td>
                                    </tr>
                                    <tr>
                                        <td><label >Amount</label></td>
                                        <td><input type="text" pattern="\d+" name="amount"/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <button >Add</button>
                                            <button>View Income</button>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                {/* View Income Component */}
                <div className="row">
                    <div className="card">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default IncomeComponent;

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return data
    //return JSON.stringify(data, null, 2);
  }
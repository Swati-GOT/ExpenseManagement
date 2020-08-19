import React from 'react'
import './incomeComponent.css'

export default class IncomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           invalid:true,
           items:[]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
            let count = prevState.items.length + 1
            let newData  = stringifyFormData(data)
            newData.id = count
            return{
                items:prevState.items.concat(newData),
                invalid:false
            }
        },() => console.log("...........",typeof(this.state.items)))

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
                                    <tbody>
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
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                    <ViewIncome entries = {this.state.items}/>
            </div>
        )
        
    }
}

function ViewIncome(props){
    if(! (props.entries.length > 0)){
        return null;
    }

    var items = props.entries
    var listItems= items.map((item)=>{
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.incomeType}</td>
                <td>{item.amount}</td>
            </tr>
        )
    })

    return(
        <div className="row">
        <div className="col-md-12">
            <div className="card strpied-tabled-with-hover">
                <div className="card-header ">
                    <h4 className="card-title">Our Income</h4>
                </div>
                <div className="card-body table-full-width table-responsive">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Income</th>
                            <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return data
    //return JSON.stringify(data, null, 2);
  }
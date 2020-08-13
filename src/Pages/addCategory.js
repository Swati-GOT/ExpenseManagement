import React from 'react'
import { Redirect } from "react-router-dom";

class AddCategory extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            categoryInfo:{
                catName:'',
                catDesc:'',
                catId:''
            },
            items:[]
        }
        this.baseState = this.state.categoryInfo
        
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetInputFields = this.resetInputFields.bind(this)
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        //const history = useHistory();
        let catInfo = {
            ...this.state.categoryInfo,
                catId:Date.now()
        }
        this.setState((prevState)=>{
            return {
                items:prevState.items.concat(catInfo),
            }
        },() => {
            this.resetInputFields(); 
            console.log(this.state.items)
            //return  <Redirect  to="/viewCategory" />
            this.props.history.push({
                pathname:'/viewCategory',
                data:this.state.items
            });
        })

        
    }

    resetInputFields = () => {
        this.setState({
            categoryInfo:this.baseState
        })
     }


    handleOnChange = (e) =>{
        const value = e.target.value;
        this.setState({
            categoryInfo:{
                ...this.state.categoryInfo,
                [e.target.name]:value
            }
        })
    }

    render(){
        console.log('render function called')
        return(
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header cardHeader" style={{backgroundColor: 'rgb(219 208 232)'}}>
                        <h4 className="card-title">Add Category</h4>
                    </div>
                    <div className="card-body" >
                        <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label >Category Name: </label></td>
                                    <td><input type="text" name="catName" value={this.state.categoryInfo.catName} onChange={this.handleOnChange}/></td>
                                </tr>
                                <tr>
                                    <td><label >Category Description:</label></td>
                                    <td><input type="text"  name="catDesc" value={this.state.categoryInfo.catDesc} onChange={this.handleOnChange}/></td>
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
        )
    }
}

export default AddCategory;
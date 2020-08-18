import React from 'react'
import { Redirect } from "react-router-dom";

class AddCategory extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            items:[],
            categoryInfo:{
                catName:'',
                catDesc:'',
                catId:''
            },
            
        }
        console.log('Constructor intialized !!!!')
        this.baseState = this.state.categoryInfo
        this.isEditable = false;
        
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetInputFields = this.resetInputFields.bind(this)
        this.pageTitle = '';
        this.btnName = '';
    }

    handleSubmit =(e)=>{
        e.preventDefault();
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
            console.log(typeof(this.state.items))
            // this.props.history.push({
            //     pathname:'/viewCategory',
            //     state:{data:this.state.items}
            // });
        })
    }

    viewAllCategory(){
        this.props.history.push({
            pathname:'/viewCategory',
            state:{data:this.state.items}
        });
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        if(params.id){
            this.isEditable = true;
            this.setState({
                categoryInfo:this.props.location.state.data
            })
            this.pageTitle = 'Update Category'
            this.btnName = 'Update'
        }else{
            this.setState({
                categoryInfo:this.baseState
            })
            this.pageTitle = 'Add Category'
            this.btnName = 'Add'
        }
    }

    resetInputFields = () => {
        this.setState({
            categoryInfo:this.baseState
        })
        // if(this.isEditable){
        //     this.setState({
        //         categoryInfo:this.props.location.state.data
        //     })
        // }else{
        //     this.setState({
        //         categoryInfo:this.baseState
        //     })
        // }
        
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
                        <h4 className="card-title">{this.pageTitle}</h4>
                    </div>
                    <div className="card-body" >
                        <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label >Category Name: </label></td>
                                    <td><input type="text" name="catName" value={this.state.categoryInfo.catName} onChange={this.handleOnChange}/></td>
                                </tr>
                                <tr><td></td></tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td><label >Category Description:</label></td>
                                    <td><input type="text"  name="catDesc" value={this.state.categoryInfo.catDesc} onChange={this.handleOnChange}/></td>
                                </tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td></td>
                                    <td>
                                    <button >{this.btnName}</button>
                                    <button onClick={()=>this.resetInputFields}>Cancel</button>
                                    <button onClick={() =>this.viewAllCategory()}> View Category</button>
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
import React from 'react'
import axios from 'axios'
import Configuration from '../common/configuration'

class AddCategory extends React.Component{

    constructor(props){
        super(props)
        this.config = new Configuration()
        this.state = {
            items:[],
            categoryInfo:{
                categoryName:'',
                categoryDesc:'',
            },
        }
        console.log('Constructor intialized !!!!')
        this.baseState = this.state.categoryInfo
        this.isEditable = false;
        this.id = ''
        this.pageTitle = '';
        this.btnName = '';

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetInputFields = this.resetInputFields.bind(this)
        
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        if(this.isEditable){
            this.updateCategory(this.id)
        }else{
            this.addCategory()
        }
        this.resetInputFields()
    }

    updateCategory(id){
        let options = {
            url: `${this.config.API_URL}/category/update/${id}`,
            method: this.config.METHOD_TYPE.PUT,
            headers: this.config.HEADERS,
            data:this.state.categoryInfo
        }
        axios(options)
        .then(res => {this.props.history.push({pathname:'/viewCategory'});})
    }

    addCategory(){
        let options = {
            url: `${this.config.API_URL}/category/add`,
            method: this.config.METHOD_TYPE.POST,
            headers: this.config.HEADERS,
            data:this.state.categoryInfo
        }
        axios(options)
        .then(res => {this.props.history.push({pathname:'/viewCategory'});})
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
            this.id = params.id
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
                                    <td><input type="text" name="categoryName" value={this.state.categoryInfo.categoryName} onChange={this.handleOnChange}/></td>
                                </tr>
                                <tr><td></td></tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td><label >Category Description:</label></td>
                                    <td><input type="text"  name="categoryDesc" value={this.state.categoryInfo.categoryDesc} onChange={this.handleOnChange}/></td>
                                </tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td></td>
                                    <td>
                                    <button >{this.btnName}</button>
                                    <button onClick={()=>this.resetInputFields}>Cancel</button>
                                    {/* <button onClick={() =>this.viewAllCategory()}> View Category</button> */}
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
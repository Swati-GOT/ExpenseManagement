import React from 'react'
import axios from 'axios'
import Configuration from '../common/configuration'

class ViewCategory extends React.Component{

    constructor(props){
        super(props)
        this.config = new Configuration()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        this.getAllCategory();
    }

    async getAllCategory(){
        let result = await axios.get(`${this.config.API_URL}/category/view`)
        console.log("....",result)
        this.setState({
            items:result.data.data
        })
        
    }

    handleClick=(item)=>{
        console.log("itemmmmmmm",item.id)
        this.props.history.push({
            pathname:`/updateCategory/${item.id}`,
            state:{data:item}
        });
    }

    render(){
        //var  items = this.props.location.state.data
        
        var listItems= this.state.items.map((item)=>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.categoryDesc}</td>
                    <td onClick={()=> this.handleClick(item)}><label>Edit</label></td>
                    <td><label>delete</label></td>
                </tr>
            )
        })
    
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card strpied-tabled-with-hover">
                            <div className="card-header ">
                                <h4 className="card-title">View Category</h4>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
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
            </div>
        )
    }
}

export default ViewCategory;
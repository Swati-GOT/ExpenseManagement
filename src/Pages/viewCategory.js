import React from 'react'

class ViewCategory extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick=(item)=>{
        console.log("itemmmmmmm",item.catId)
        this.props.history.push({
            pathname:`/updateCategory/${item.catId}`,
            state:{data:item}
        });
    }

    render(){
        var  items = this.props.location.state.data
        
        var listItems= items.map((item)=>{
            return (
                <tr key={item.catId}>
                    <td>{item.catId}</td>
                    <td>{item.catName}</td>
                    <td>{item.catDesc}</td>
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
import React from 'react'

class ViewCategory extends React.Component{
    render(){
        const {data} = this.props.location
        console.log("....",data)
        return(<div> View Category !!!</div>)
    }
}

export default ViewCategory;
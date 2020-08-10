import React, {Component} from 'react'
import "./TodoList.css";
import FlipMove from 'react-flip-move';

class TodoList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== ''){
            var newItem = {
                text:this._inputElement.value,
                key:Date.now()
            }
        }
        this.setState((prevState) =>{
            return{
                items:prevState.items.concat(newItem)
            }
        })
        this._inputElement.value = "";
        e.preventDefault();
    }

    deleteItem(key){
        const filteredItem =  this.state.items.filter((obj) => obj.key !== key)
        this.setState({
            items:filteredItem
        })
    }

    render(){
    
        return(
            <div className="todoListMain">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                    placeholder='Enter Task'>
                    </input>
                    <button type='submit'>Add</button>
                </form>
                </div>
                <TodoItem  
                    entries = {this.state.items}
                    delete = {this.deleteItem}
                />
                {/* <ul className="theList">
                    {TodoList}
                </ul> */}
            </div>
        )
    }
}

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.createTasks = this.createTasks.bind(this);  
    }

    createTasks(item) {    
        return <li key={item.key}>{item.text}
        <i class="fa fa-trash" onClick={() => this.delete(item.key)}></i>
        </li>
        
    }   

    delete(key){
        return this.props.delete(key);
    }

    render(){
        var todoEntries = this.props.entries
        var listItems = todoEntries.map(this.createTasks);     
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">  
                {listItems}
                </FlipMove>
            </ul>
        )
    }

}


export default TodoList;
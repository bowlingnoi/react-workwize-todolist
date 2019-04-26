import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
// import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [{
        title: 'Task #1',
        isCompleted: false,
      }],
      isHide: false
    }
  }

  // In class 
  state = {
    lists: [

    ]

  }

  componentDidMount() {
    this.countCompleteItem()
  }

  onCreateNewItem = () => {
    console.log('onCreateTask')
    // By Me

    const newList = this.state.lists
    newList.push({
      title: "",
      isCompleted: false,
    })
    this.setState({
      lists: newList
    })


    // In class 
    // this.setState( ({ list }) => ({
    //   list: [...list, { title: `Task $(lastid)`, isComplete: false, id: lastId }],
    //   lastId: lastId+1
    // }))
  }

  onEditTask = (event, key) => {
    console.log( 'onEditTask')
    const newList = this.state.lists
    newList[key]['title'] = event.target.value
    this.setState({
      lists: newList
    })
  }

  countCompleteItem = () => {
    const lists = this.state.lists
    const result = lists.reduce((cnt, value) => { 
      return (value.isCompleted == true) ? cnt + 1 : cnt
    }, 0)
    
    return result

    // In class  : error 
    // const result = lists.filter( (item) => item.completeed ).length
  }

  onToggleListItem = (key) => {
    console.log('onToggleItem ')
    const newList = this.state.lists
    newList[key]['isCompleted'] = !this.state.lists[key]['isCompleted']
    this.setState({
      lists: newList
    })

    // In class : npm install lodash
    // this.setState(({ list }) => {
    //   const newList = _.cloneDeep(list)   // use library lodash
    //   const selectedItem = newList.find((item) => {
    //     item.id = 
    //   })
    // } )
  }

  onToggleCompletedList = (event, key) => {
    const value = event.target.checked
    const newList = this.state.lists
    newList[key]['isCompleted'] = value
    this.setState({
      lists: newList
    })
  }

  onDeleteTask = (event, key) => {
    event.preventDefault()
    event.stopPropagation()

    const newList = this.state.lists.filter((item, index) => {
      return (key != index) ? item : null
    })
    this.setState({
      lists: newList
    }) 
  }

  onHideCompleteList = () => {
    this.setState({
      isHide: !this.state.isHide
    })
  }

  render() {
    // const { lists , showComplete } = this.state


    return (
      <div className="App">
        <Header title="To Do List" onCreateNewItem={this.onCreateNewItem} />
        <TodoList lists={this.state.lists}
          isHide={this.state.isHide}
          onHideCompleteList={this.onHideCompleteList}
          onEditTask={this.onEditTask}
          onCreateNewItem={this.onCreateNewItem}
          countCompleteItem={this.countCompleteItem}
          onToggleCompletedList={this.onToggleCompletedList}
          onToggleListItem={this.onToggleListItem}
          onDeleteTask={this.onDeleteTask}
          />
      </div>
    );
  }
}

export default App;

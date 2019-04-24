import React, { Component } from 'react';
import ListItem from './ListItem';
import { convertPatternsToTasks } from 'fast-glob/out/managers/tasks';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.countCompleteItem()} Completed
          <span className="pull-right"
            onClick={this.props.onHideCompleteList}
          >{this.props.isHide ? 'Show' : 'Hide' }</span>
        </p>
        <ul className="list-group">
          {
            this.props.lists.map((value, key) => {
              return (
                <ListItem key={key} title={value.title} 
                  onCreateNewItem={this.props.onCreateNewItem}
                  onEditTask={ (event) => this.props.onEditTask(event,key) }
                  isCompleted={value.isCompleted}
                  isHide={this.props.isHide}
                  countCompleteItem={this.props.countCompleteItem}
                  onToggleCompletedList={(event) => this.props.onToggleCompletedList(event, key)}
                  onToggleListItem={() => this.props.onToggleListItem(key)}
                  onDeleteTask={ (event) => this.props.onDeleteTask(event,key) }
                   />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;


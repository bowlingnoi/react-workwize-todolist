import React, { Component } from 'react';
import { isNull } from 'util';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: true
        };
    }

    handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            this.props.onCreateNewItem()
        }
    }

    renderTaskInput() {
        return (
            <input className="form-control"
                type="text"
                name={this.props.key}
                value={this.props.title}
                onChange={(event) => this.props.onEditTask(event, this.props.key)}
                onKeyDown={this.handleKeyDown} />
        )
    }

    renderDeleteButton( key ) {
        return (
            <i className="fa fa-times-circle text-danger"
                onClick={ (e) => this.props.onDeleteTask(e,key) }
            ></i>
        )
    }

    render() {

        return ( isNull(this.props.list) ) ? null : (
            <li className={ (this.props.isHide && this.props.isCompleted) ? 'list-group-item hide' : 'list-group-item' }
                key={this.props.key}
                onClick={ () => this.props.onToggleListItem(this.props.key) } 
            >
                <input type="checkbox"
                    name="checklist"
                    checked={this.props.isCompleted ? 'checked' : ''}
                    onChange={(event) => this.props.onToggleCompletedList(event, this.props.key)} />
                { this.renderTaskInput() }
                { ( this.state.showDelete ) ? this.renderDeleteButton( this.props.key ) : null }
            </li> 
        );
  }
}

export default ListItem;
import React, { Component } from 'react';
import { isNull } from 'util';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false
        };
    }
    
    handleKeyDown = (event,key) => {
        if (event.key == 'Enter') {
            this.props.onCreateNewItem()
        }
    }
    handleInputFocus = (event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    renderTaskInput() {
        return (
            <input className="form-control"
                type="text"
                name={this.props.key}
                value={this.props.title}
                onChange={(event) => this.props.onEditTask(event, this.props.key)}
                onClick={() => this.props.onToggleListItem(this.props.key)} 
                onKeyDown={ this.handleKeyDown }
                autoFocus
            />
        )
    }

    renderDeleteButton( key ) {
        return (
            <i className={ this.state.showDelete ? 'fa fa-times-circle text-danger' : 'fa fa-times-circle text-danger hide' }
                style={{ cursor: 'pointer'}}
                onClick={(e) => this.props.onDeleteTask(e, key)}
            ></i>
        )
    }

    onShowDeleteList = () => {
        this.setState({
            showDelete: true
        })
    }
    onHideDeleteList = () => {
        this.setState({
            showDelete: false
        })
    }

    render() {
        return ( isNull(this.props.list) ) ? null : (
            <li className={ (this.props.isHide && this.props.isCompleted) ? 'list-group-item hide' : 'list-group-item' }
                key={this.props.key}
                onMouseOut={this.onHideDeleteList}
                onMouseMove={this.onShowDeleteList}
            >
                <input type="checkbox"
                    name="checklist"
                    style={{ display: 'none' }}
                    checked={this.props.isCompleted ? 'checked' : ''}
                    onChange={(event) => this.props.onToggleCompletedList(event, this.props.key)}
                />
                <span className="" style={{ fontSize: '11px' }}>
                    {this.props.isCompleted ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle" style={{color: '#ccc'}}></i>}
                </span>
                { this.renderTaskInput() }
                { this.renderDeleteButton( this.props.key ) }
            </li> 
        );
  }
}

export default ListItem;
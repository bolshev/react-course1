import React from 'react';
import './css/Task.css';
import TaskActions from './flux/TaskActions';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.showDone = props.filters.showDone;
        this.state = props.data;
    }

    handleChangeChecked(e) {
        console.log("Task:handleChangeChecked");
        let state = this.state;
        state.isDone = e.target.checked;
        TaskActions.toggleTask(state.key, state.isDone);
        this.setState(state);
    }

    handleEditClick() {
        console.log("Task:handleEditClick");
        TaskActions.editTask(this.state.key);
    }

    render() {
        if ((!this.props.filters.showDone && this.state.isDone) || this.state.title.indexOf(this.props.filters.fText) === -1) {
            return (null);
        } else {
            return (
                <div className="Task">
                    <div className="Task-content">
                        <input onChange={this.handleChangeChecked.bind(this)} type="checkbox"
                               checked={this.state.isDone}/>
                        <span className="Task-title">{this.state.title}</span>
                        <button onClick={this.handleEditClick.bind(this)}>Edit</button>
                    </div>
                </div>
            );
        }
    }
}

export default Task;

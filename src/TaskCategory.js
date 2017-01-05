import React, {Component} from 'react';
import './Category.css';

class TaskCategory extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        props.data.selected = props.data.selected || false;
        this.state = props.data;
        this.isEdit = props.isEdit;
        this.onClick = props.onClick;
    }

    handleSelectCategory() {
        console.log("handleSelectCategory");
        let state = this.state;
        state.selected = !this.state.selected;
        this.setState(state);
        this.onClick(this.state, state.selected);
    }

    render() {
        return (
            <div className="Category">
                <div className="Category-content">
                    {this.state.children ? <span className="Category-expand">^</span> :
                        <span className="Category-expand"/>}
                    <span className="Category-title">
                        {this.state.title}
                    </span>
                    <button>Select</button>
                </div>
                {this.state.children ?
                    <div className="Category-sublist">
                        {this.state.children.map((elem) => <Category isEdit={this.isEdit}
                                                                     key={elem.key}
                                                                     data={elem}/>)}
                    </div> : ""
                }
            </div>
        );
    }
}

export default TaskCategory;

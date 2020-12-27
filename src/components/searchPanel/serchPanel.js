import React, {Component} from 'react';
import './searchPanel.css';

export default class SerchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onUpdateSerch = this.onUpdateSerch.bind(this);
  }

  onUpdateSerch(e) {
    const term = e.target.value;
    this.setState({term});
    this.onUpdateSerch(term)
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Пошук по записах"
        onChange={this.onUpdateSerch}
      />
      
    )
  }
};
import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';


export default class haptTile extends Component {

    constructor(props) {
      super(props);
      console.log("og props");
      console.log(this.props);
      this.state = {
        ship: "~zod",
        name: "",
        notes: [{ name: "" }]
      };
    };
    
    handleNoteNameChange = idx => evt => {
      const newNotes = this.state.notes.map((hapt, sidx) => {
        if (idx !== sidx) return hapt;
        return { ...hapt, name: evt.target.value };
      });

      this.setState({ notes: newNotes });
    };

    handleAddNote = () => {
      api.action('hapt', 'json', {notes: this.state.notes});
      this.setState({
        notes: this.state.notes.concat([{ name: "" }])
      });
    };

    handleRemoveNote = idx => () => {
      this.setState({
        notes: this.state.notes.filter((s, sidx) => idx !== sidx)
      });
      api.action('hapt', 'json', {notes: this.state.notes});
    };

    render() {
      return (
        <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Hapt</p>
	<div className="absolute" style={{ top: 25, left: 8 }}>
	<form onSubmit={this.handleSubmit}>
          {this.state.notes.map((hapt, idx) => (
            <div className="hapt">
              <table><tr>
              <td><input type="text" style={{ width: 184}} placeholder={`Note #${idx + 1} name`} value={hapt.name} onChange={this.handleNoteNameChange(idx)} /></td>
              <td><button type="button" onClick={this.handleRemoveNote(idx)} className="small">–</button></td>
	      </tr></table>
            </div>
          ))}
          <table><tr>
          <td><button type="button" onClick={this.handleAddNote} className="small">New Note</button></td>
          </tr></table>
        </form>
	</div>
        </div>
    );
  }
}

window.haptTile = haptTile;

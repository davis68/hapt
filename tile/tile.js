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
      const newNotes = this.state.notes.map((noht, sidx) => {
        if (idx !== sidx) return noht;
        return { ...noht, name: evt.target.value };
      });

      this.setState({ notes: newNotes });
    };

    handleAddNote = () => {
      this.setState({
        notes: this.state.notes.concat([{ name: "" }])
      });
      api.action('hapt', 'json', {ship: this.state.ship});
    };

    handleRemoveNote = idx => () => {
      this.setState({
        notes: this.state.notes.filter((s, sidx) => idx !== sidx)
      });
    };

    sub() {
        api.action('hapt', 'json', {ship: this.state.ship});
    }

    handleChange(event) {
        this.setState({ship: event.target.value});
    }

    render() {
      return (
        <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Noht</p>
	<div className="absolute" style={{ top: 25, left: 8 }}>
	<form onSubmit={this.handleSubmit}>
          {this.state.notes.map((noht, idx) => (
            <div className="noht">
              <table><tr>
              <td><input type="text" style={{ width: 184}} placeholder={`Note #${idx + 1} name`} value={noht.name} onChange={this.handleNoteNameChange(idx)} /></td>
              <td><button type="button" onClick={this.handleRemoveNote(idx)} className="small">–</button></td>
	      </tr></table>
            </div>
          ))}
          <button type="button" onClick={this.handleAddNote} className="small">New Note</button>
        </form>
	</div>
        </div>
    );
  }
    /*return (
      <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Testing</p>
        <p className="white absolute" style={{ top: 25, left: 8 }}>Hi a ship {this.props.data.status}</p>
        <p className="white absolute" style={{ top: 100, left: 8 }}>
        <button onClick={this.sub.bind(this)}>stuff</button></p>
        <p className="white absolute" style={{ top: 150, left: 15 }}>
        <input type="text" value={this.state.ship}
         onChange={this.handleChange.bind(this)}/></p>
      </div>/
    );
  }/**/

}

window.haptTile = haptTile;

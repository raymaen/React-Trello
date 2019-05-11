import React, { Component } from "react";
import { connect } from "react-redux";

import Board from "./Board";
import AddBoard from './AddBoard'

// This component displays a list of all the boards.
// Actions : add , update , destroy board

export class BoardList extends Component {
  render() {
    console.log(this.props.boards);
    return (
      <div className="text-center board-list">
        <div className="row header-row">
          <div className="col">
            <h1>Choose a board:</h1>
          </div>
        </div>
        <div className="row mt-4 pl-5 pr-5">
          {this.props.boards.map(board => (
            <div className="col-md-4" key={board.id}>
              <Board board={board} boardID={board.id}/>
            </div>
          ))}
          <div className="col-md-4">
          <AddBoard/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: Object.values(state.boards)
});


export default connect(
  mapStateToProps,
  null
)(BoardList);

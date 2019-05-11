import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateBoard, removeBoard } from "../../actions/boardActions";

export class Board extends Component {
  state = {
    boardTitleInput: this.props.board.title,
    showUpdate: false
  };

  nextPath = path => {
    this.props.history.push(path);
  };

  renderTitle = () => {
    if (this.state.showUpdate) {
      return (
        <div>
          <input
            type="text"
            onChange={this.updateInput.bind(this)}
            value={this.state.boardTitleInput}
            style={{
              background: "none",
              border: "none",
              borderBottom: "2px solid #fff",
              fontSize: "18px",
              color: "#fff",
              paddingBottom: "4px",
              marginBottom: "7px"
            }}
          />

          <button
            className="btn delete"
            onClick={() => {
              this.props.removeBoard(this.props.board.id);
            }}
          >
            ✘
          </button>
          <button
            className="btn update"
            onClick={() => {
              this.setState({
                showUpdate: !this.state.showUpdate
              });
              this.props.updateBoard({
                ...this.props.board,
                title: this.state.boardTitleInput
              });
            }}
          >
            ✔
          </button>
        </div>
      );
    } else {
      return (
        <h3
         
          onClick={() => this.nextPath(`/board/${this.props.board.id}`)}
        >
          {this.props.board.title}
        </h3>
      );
    }
  };

  handleEditClick = () => {
    this.setState({
      showUpdate: !this.state.showUpdate
    });
  };

  updateInput = e => {
    this.setState({
      boardTitleInput: e.target.value
    });
  };

  render() {
    const { cards } = this.props.board;

    return (
      <div
        className="board m-1 mb-4 p-4"
        style={{ backgroundColor: this.props.board.color }}
      >
        <div className="board-title">{this.renderTitle()}</div>
        <h5>Cards : {cards.length}</h5>
        <div className="pl-2 pb-2">
          <div className="actions">
            <button
              className="btn edit"
              onClick={this.handleEditClick.bind(this)}
            >
              ✐
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: board => dispatch(updateBoard(board)),
    removeBoard: id => dispatch(removeBoard(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Board));

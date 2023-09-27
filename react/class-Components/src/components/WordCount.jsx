import React from "react";

export default class WordCount extends React.Component {
  state = {
    txt: "",
  };
  render() {
    return (
      <>
        <div>
          <h1 className="text-3xl text-center my-5 py-3">Word Count</h1>
          <textarea
            onChange={(e) => this.setState({ txt: e.target.value })}
            className="text-black mx-4 rounded "
          />
          <div className="flex ">
            <div className="mx-5 bg-[green] rounded px-3">
              <span> {this.state.txt.length || "0"} characters</span>
            </div>
            <div>
              <span className="bg-[blue] rounded px-3">
                {this.state.txt ? this.state.txt.match(/\w+/gim).length : "0"}
                {""}
                words
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

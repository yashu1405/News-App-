import React, { Component } from "react";

export class NewsUpdate extends Component {
  render() {
    let { title, imageUrl, newsUrl,author,date } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "20rem" }}>
          <div class="card-header bg-warning"><b>{author}</b></div>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            height="200px"
          />
          <div className="card-body">
           <div style={{height:"100px"}}><h5 className="card-title">{title}</h5></div> 
            {/* <p className="card-text">{description}...</p> */}
            <a rel="noreferrer" href={newsUrl} className="btn btn-primary">
              Read More
            </a>
          </div>
          <div class="card-footer text-success"><b>{date}</b></div>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;

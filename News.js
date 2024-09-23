import React, { Component } from "react";
import NewsUpdate from "./NewsUpdate";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country:"us",
    category : "general", 
  }

  static propTypes = {
    country:PropTypes.string,
    category : PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0
    }
  }
  async updateNews(){
    //this.props.setProgess(5);
    const url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=${this.state.page}&pageSize=12`
    let data = await fetch(url)
    //this.props.setProgess(30);
    let parsedData = await data.json();
    //this.props.setProgess(50);
    this.setState({
      page:this.state.page,
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
  })
  //this.props.setProgess(100);
  }

  async componentDidMount(){
    //let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c591657f218f4fa2ab8d2816f9ec31fd"
    //let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=1&pageSize=12`;

    //  let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=1&pageSize=12`
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles})
    this.updateNews();
  }

  nextClick = async ()=>{
    //let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=${this.state.page + 1}&pageSize=12`;
     let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=${this.state.page + 1}&pageSize=12`

    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page:this.state.page + 1,
        articles:parsedData.articles,
        loading:false
    })
  }
  prevClick = async ()=>{
    //let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=${this.state.page - 1}&pageSize=12`;
    let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=${this.state.page - 1}&pageSize=12`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page:this.state.page - 1,
        articles:parsedData.articles,
        loading:false
    })
  }

  fetchMoreData = async() =>{
    const url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=c591657f218f4fa2ab8d2816f9ec31fd&page=${this.state.page}&pageSize=12`
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      page:this.state.page,
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
  })
  };
  render() {
    return (
      <div>
        <div className="container my-3">
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>Priveous</button>
            <button type="button" className="btn btn-dark" onClick={this.nextClick}>Next</button>
            </div> */}
          <h2 className="text-center my-3">TOP HEADLINES</h2>
          <h5 className="my-3">totalResults:{this.state.totalResults}</h5>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.totalResults}
            loader={<h4>Loading...</h4>}
            >
          {this.state.loading && <Spinner/>}
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col md-4" key={element.url}>
                <NewsUpdate
                  author = {element.author}
                  title={element.title}
                  // description={element.description}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                  date = {element.publishedAt}
                />
              </div>;
            })}
            {this.state.loading && <Spinner/>}
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>Priveous</button>
            
            <button type="button" className="btn btn-dark" onClick={this.nextClick}>Next</button>
            </div> */}
          </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;

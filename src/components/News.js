import React, { Component } from 'react'
import NewsIteam from './NewsIteam';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: "general",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    constructor() {
        super();

        this.state = {
            page: 1,
            articles: [],
            loading: false
        }
    }
    async updateNews() {

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e11bd454398b40dbaf13becdcfca12e1&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    }
    async componentDidMount() {
     this.updateNews();
    }
    handleBcClick = async () => {
      
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }
    handleNextClick = async () => {
       
        this.setState({ page: this.state.page + 1 })
        this.updateNews();

}
render() {
    return (
        <div className='container my-3'>
            <div className='row' >
                <h1>THE TIMES OF INDIA</h1> <h6>HARYANA</h6>
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className='col-md-4' key={element.url} >
                        <NewsIteam title={element.title ? element.title.slice(0, 25) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}


            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleBcClick}> 	&lArr; back</button>
                {this.state.loading && <Spinner />}
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rArr;</button>
            </div>
        </div>
    )
}
}
export default News

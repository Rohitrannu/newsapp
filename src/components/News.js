import React, { Component } from 'react'
import NewsIteam from './NewsIteam';

export class News extends Component {

    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e11bd454398b40dbaf13becdcfca12e1&page=1&pagesize=18";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles })
    }
    handleBcClick = async () => {
        console.log("back click")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e11bd454398b40dbaf13becdcfca12e1&page=${this.state.page - 1}&pagesize=18`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })

    }
    handleNextClick = async () => {
        console.log("next click")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e11bd454398b40dbaf13becdcfca12e1&page=${this.state.page + 1}&pagesize=18`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <div className='row' >
                   <h1>THE TIMES OF INDIA</h1> <h6>HARYANA</h6>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url} >
                            <NewsIteam title={element.title ? element.title.slice(0, 25) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}


                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleBcClick}> 	&lArr; back</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rArr;</button>
                </div>
            </div>
        )
    }
}
export default News

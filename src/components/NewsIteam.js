import React, { Component } from 'react'



export class NewsIteam extends Component {
    render() {
      let { title, description, imageUrl,newsUrl} = this.props
      return (
          <div className='my-3'>
              <div className="card" style={{ width: "18rem" }}>
                  <img src={!imageUrl?"https://c.ndtvimg.com/2022-12/77eef9tg_rahul-gandhi_625x300_24_December_22.jpg":imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">{title}... </h5>
                      <p className="card-text">{description }...</p>
                      <a href={newsUrl} target='_blank nonreferrer' className="btn btn-sm btn-dark">Read more</a>
                  </div>
              </div>
          </div>
      )
  }
  }
  

export default NewsIteam

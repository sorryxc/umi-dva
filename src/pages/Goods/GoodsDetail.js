import React, { Component } from 'react'

export default class GoodsDetail extends Component{
  handleClick() {
    window.location.href = 'www.baidu.com'
  }

  render() {
    return (
      <div>
        <div>
          <h1>电视机</h1>
          <span onClick={ this.handleClick }>点我跳百度</span>
        </div>
      </div>
    )
  }
}

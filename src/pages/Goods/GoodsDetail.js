import React, { Component } from 'react'

export default class GoodsDetail extends Component{
  handleClick() {
    location.href = 'www.baidu.com'
  }

  redner() {
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

import React, { Component } from 'react'

export class UserItem extends Component {
  state = {
      id: 'id',
      login: 'Kerv',
      avatar_url: 'https://avatars.githubusercontent.com/u/10268341?v=4',
      html_url: 'https://github.com/kervcode'
    }
  
  
  render() {
    const {id, login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img src={this.state.avatar_url} className="round-img" alt="" style={{ width: "60px"}} />
        <h3> { this.state.login }</h3>
        
        <div>
          <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">more</a>
        </div>
      </div>
    )
  }
}

export default UserItem

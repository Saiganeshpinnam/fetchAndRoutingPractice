// Write your JS code here

import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsData: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({
      blogsData: formattedData,
    })
  }

  render() {
    const {blogsData} = this.state

    return (
      <div>
        {blogsData.map(item => (
          <BlogItem key={item.id} blogData={item} />
        ))}
      </div>
    )
  }
}

export default BlogList

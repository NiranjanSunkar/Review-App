import {Component} from 'react'

import './index.css'

class ReviewsCarousal extends Component {
  state = {ActiveReviewIndex: 0}
  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {ActiveReviewIndex} = this.state

    if (ActiveReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        ActiveReviewIndex: prevState.ActiveReviewIndex + 1,
      }))
    }
  }
  onClickLeftArrow = () => {
    const {ActiveReviewIndex} = this.state

    if (ActiveReviewIndex > 0) {
      this.setState(prevState => ({
        ActiveReviewIndex: prevState.ActiveReviewIndex - 1,
      }))
    }
  }
  renderActiveReview = Review => {
    const {imgUrl, username, companyName, description} = Review
    return (
      <div className="person-container">
        <img src={imgUrl} alt={username} className="profile" />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p cla="description">{description}</p>
      </div>
    )
  }
  render() {
    const {ActiveReviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[ActiveReviewIndex]
    return (
      <div className="bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="profile-conatiner">
          <button
            type="button"
            className="btn"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-arrow"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            className="btn"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousal

import { h, Component } from 'preact'
import { Link } from 'preact-router'

export default class CourseTile extends Component {
  render () {
    return (
      <div class='tileLayout'>
        <div class='courseTile'>
          <div class='cover' style={{'backgroundImage': `url(${this.props.images.thumbnail})`}} />
          <div class={'info'}>
            <div class={'avatar'}>
              <img src={this.props.instructor.avatar} alt={`Course By: ${this.props.instructor.name}`} />
            </div>
            <div>
              <h5>{this.props.title}</h5>
              <p>{this.props.discription}</p>
            </div>
            <div>
              <Link class='count' href={`/course/${this.props.url}`}>{this.props.count} Lessons</Link>
              <Link class='play' href={`/course/${this.props.url}`}>
                <img src='/assets/img/play.svg' alt={`Start ${this.props.title} now`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

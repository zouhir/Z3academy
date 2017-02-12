import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class CourseTile extends Component {
  render () {
    return (
      <div class={style.layoutTile}>
        <div class={style.courseTile}>
          <div class={style.cover} style={{'backgroundImage': `url(${this.props.images.thumbnail})`}} />
          <div class={style.info}>
            <div class={style.avatar}>
              <img src={this.props.instructor.avatar} />
            </div>
            <div>
              <h5>{this.props.title}</h5>
              <p>{this.props.discription}</p>
            </div>
            <div>
              <Link class={style.count} href={`/course/${this.props.url}`}>{this.props.count} Lessons</Link>
              <Link class={style.play} href={`/course/${this.props.url}`}>
                <img src='/assets/img/play.svg' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

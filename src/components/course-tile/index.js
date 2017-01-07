import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class CourseTile extends Component {
  render () {
    return (
      <div class={style.layoutTile}>
        <div class={style.courseTile}>
          <div class={style.cover} />
          <div class={style.info}>
            <div>img</div>
            <div>
              <h5>Course one</h5>
              <p>Zouhir is fantastic, super duper</p>
            </div>
            <div>
              <Link class={style.count}>20 Lessons</Link>
              <Link class={style.play}>
                <img src='/assets/img/play.svg' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

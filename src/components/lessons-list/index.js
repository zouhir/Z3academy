import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class LessonsList extends Component {
  render () {
    return (
      <ul class={style.lessonList}>
        <li>
          <a>
            Lesson 1 <p class={style.time}>5:31</p> <span class={style.bars}><i></i></span>
          </a>
        </li>

        <li class={style.active}>
          <a>
            Lesson 2 <p class={style.time}>5:31</p> <span class={style.bars}><i></i></span>
          </a>
        </li>

        <li>
          <a>
            Lesson 3 <p class={style.time}>5:31</p> <span class={style.bars}><i></i></span>
          </a>
        </li>

        <li>
          <a>
            Lesson 4 <p class={style.time}>5:31</p> <span class={style.bars}><i></i></span>
          </a>
        </li>

      </ul>
    )
  }
}

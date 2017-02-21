import { h, Component } from 'preact'

export default class LessonsList extends Component {
  static defaultProps = {
    title: 'New Lesson'
  }
  render (props) {
    let { title } = props
    return (
      <div class='lessons'>
        <h1>{title}</h1>
        <ul class='lessonList'>
          <li>
            <a>Course 1 <span>ss</span> </a>
          </li>
        </ul>
      </div>
    )
  }
}

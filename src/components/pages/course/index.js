import { h, Component } from 'preact'
import style from './style'

import Master from '../master'

import LessonsList from '../../lessons-list'

export default class Course extends Component {
  render () {
    return (
      <Master title={`Course: Example`}>
        <div class='containerBase'>
          <LessonsList />
        </div>
      </Master>
    )
  }
}

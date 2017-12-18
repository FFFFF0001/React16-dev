import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../componment/avatar-selector/avatar-selector'
class ConsignorInfo extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      title: ''
    }
  }

  onChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  render () {
    return (
      <div>
        <NavBar mode="dark" >委托人完善信息</NavBar>
        <AvatarSelector
          selectAvatar={(imgname) => {
            this.setState({
              avatar: imgname
            })
          }}
        ></AvatarSelector>
        <InputItem onChange={(v) => this.onChange('title', v)} >
          委托任务
        </InputItem>
        <InputItem onChange={(v) => this.onChange('company', v)} >
          委托人名
        </InputItem>
        <InputItem onChange={(v) => this.onChange('money', v)} >
          薪资
        </InputItem>
        <TextareaItem
          onChange={(v) => this.onChange('desc', v)}
          rows={3}
          autoHeight
          title='任务要求'
        >
        </TextareaItem>
        <Button type='primary'>SAVE</Button>
      </div>
    )
  }
}

export default ConsignorInfo
import { useState } from 'react'

import './DownloadImg.css'
import check_icon from './assets/check.png'
import new_icon from './assets/new.png'

function DownloadImg(props) {
  const [count, setCount] = useState(0)

  return (
    <div className={'downloadImg_cont ' + (props.title!='pro'? "downloadImg_cont_border" : "") }>
        <div className={'downloadImg_title ' + (props.title=='pro'? "downloadImg_title_right": "") }>
            {props.title=='pro'?<img src={new_icon} /> :<></> }
            {props.title}
        </div>

        <div className='downloadImg_subtitle'>
            {props.subTitle}
        </div>

        <button className='downloadImg_btn'>{props.btn_text}</button>

        <div className='small_text_cont'>
            <img src={check_icon} />    
            {props.small_text}
        </div>
    </div>
  )
}

export default DownloadImg

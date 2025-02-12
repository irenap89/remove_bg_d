import { useState,useRef } from 'react'

import './Tab.css'
import img_1 from './assets/img_1.png'
import warning_icon from './assets/warning.png'

function Tab(props) {
  const [selected_color, set_selected_color] = useState(0)

  const inputElement = useRef();

  const clickInput = () => {
    inputElement.current.click();
  };

  return (
    <div className='Tab_cont'>
     {props.tab=='no_bg' ? <div>
        <div className='warning_icon_cont'>
            <img src={warning_icon} />
            <span>אל תשכח להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף</span>

        </div>

        <div className='color_btn' onClick={clickInput} > 
            <span className='color_span' style={{backgroundColor: selected_color}}> </span>
            צבע רקע
            
        </div>

        <input type="color" ref={inputElement}  className='input_color' value={selected_color} onChange={(e)=>set_selected_color(e.target.value)}/>

     </div> : <></>}

     <img src={img_1} className='img_1'/>
    </div>
  )
}

export default Tab

import { useState,useRef ,useEffect} from 'react'

import './Tab.css'
import img_1 from './assets/img_1.png'
import warning_icon from './assets/warning.png'

function Tab(props) {
  const [selected_color, set_selected_color] = useState(0)
  const [loader_p, set_loader_p] = useState(0);
  const [loader_cont, set_loader_cont] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      if (loader_p<100) {
          set_loader_p((loader_p) => loader_p + 1);
      }
    
      if (loader_p) {
        set_loader_cont(!loader_cont)
      }
    }, 50);
  },[loader_p,loader_cont]);


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

        <input type="color" ref={inputElement}  className='input_color' value={selected_color} onChange={(e)=>{set_selected_color(e.target.value); props.set_color(e.target.value)}}/>

     </div> : <></>}


    {props.file_name && props.tab=='no_bg'?
    <img src={'http://localhost:5000/no_bg_'+props.file_name} className='img_1'/> : <></>}

     
    {props.file_name && props.tab!='no_bg'?
    <img src={'http://localhost:5000/'+props.file_name} className='img_1'/> : <></>}


      {!props.file_name && props.show_loader ?<div className='loader_cont'>
        <div className='loader_cont_in' style={{width:loader_p+'%'}}>
            {loader_p}%
        </div>
      </div>: <></>}

    </div>
  )
}

export default Tab

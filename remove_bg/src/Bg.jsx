import { useState } from 'react'
import close_img from './assets/close.png'
import './Bg.css'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
function Bg() {

  const [tab, settab] = useState(1)


  return (
    <div className='bg_cont'>
        <img src={close_img} className='close_img'/>

        <h1 className='bg_title'>העלאת תמונה כדי להסיר את הרקע</h1>
        <div>
            <button className='upload_img_btn'>העלאת תמונה</button>
            <div className='upload_img_text'>פורמטים נתמכים png, jpg</div>
        </div>


        <div className='middle_div_cont'>

          <div className='left_div_cont'>
      
            <div className='left_div_cont_inner'>



            </div>

          </div>

          <div className='right_div_cont'>

            <div className='tabs_cont'>
                <div className={'tab_no_bg ' + (tab==1? 'tab_selected' : '') } onClick={()=>settab(1)}>הוסר רקע</div>
                <div className={'tab_original ' + (tab==2? 'tab_selected' : '') } onClick={()=>settab(2)}>מקורי</div>
            </div>
            
            <div className='right_div_cont_inner'>

            </div>

          </div>

        </div>


        <div className='footer_cont'>
           <img src={banner} />
           <img src={logo} className='logo'/>
        </div>


   
    </div>
  )
}

export default Bg

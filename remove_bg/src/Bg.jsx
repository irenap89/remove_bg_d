import { useState } from 'react'
import close_img from './assets/close.png'
import './Bg.css'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import DownloadImg from './DownloadImg'
import Tab from './Tab'
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

                <DownloadImg title="תמונה חינם" subTitle="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"/>
                <DownloadImg title="pro" subTitle="תמונה מלאה" btn_text="הורד HD" small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"/>

            </div>

          </div>

          <div className='right_div_cont'>

            <div className='tabs_cont'>
                <div className={'tab_no_bg ' + (tab==1? 'tab_selected' : '') } onClick={()=>settab(1)}>הוסר רקע</div>
                <div className={'tab_original ' + (tab==2? 'tab_selected' : '') } onClick={()=>settab(2)}>מקורי</div>
            </div>
            
            <div className='right_div_cont_inner'>

               {tab==1? <Tab tab="no_bg"/> :

                <Tab tab="original"/> }

            </div>

            <div className='eula_cont'> 
                <div className='eula_text'>על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות</div>
                <button className='eula_img_btn'>העלאת תמונה</button>

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

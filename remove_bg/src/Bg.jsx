import { useState,useRef } from 'react'
import close_img from './assets/close.png'
import './Bg.css'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import DownloadImg from './DownloadImg'
import Tab from './Tab'
import close_img_black from './assets/close1.png'
import not_robot from './assets/not_robot.png'
import axios from 'axios'

function Bg() {

  const [tab, settab] = useState(1)

  const [show_eula_popup, setshow_eula_popup] = useState(false);
  const [show_download_popup_s, setshow_download_popup_s] = useState(false);
  
  const [err_msg, seterr_msg] = useState('');

  function show_download_popup(val){
    setshow_download_popup_s(val);
  }

  
  const inputElement = useRef();

  const fileInput = () => {
    inputElement.current.click();
  };

  function file_upload_func(e){
    let file_img=e.target.files[0];

    if (file_img.type=='image/png' || file_img.type=='image/jpeg'  || file_img.type=='image/jpg'){
        if (file_img.size<=1000000){
          

          let formData = new FormData();
          formData.append('file', file_img);
          // formData.append('color', color);
        
          axios.post('http://localhost:5000/upload_file',
              formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function (res) {
              console.log(res);
            })
            .catch(function () {
              console.log('FAILURE!!');
            });
      



        } else {
          seterr_msg('קובץ גדול מידי');
        }
      
    } else {
      seterr_msg('קובץ לא נתמך');
    }

  }
  
  return (
    <>
    <div className='bg_cont'>
        <img src={close_img} className='close_img'/>

        <h1 className='bg_title'>העלאת תמונה כדי להסיר את הרקע</h1>
        <div>
            <button className='upload_img_btn' onClick={fileInput}>העלאת תמונה</button>
            <input type="file" className='file_upload_input' ref={inputElement} onChange={(e)=>file_upload_func(e)}/>
             <div className='err_msg'>{err_msg}</div> 
            <div className='upload_img_text'>פורמטים נתמכים png, jpg</div>
        </div>


        <div className='middle_div_cont'>

          <div className='left_div_cont'>
      
            <div className='left_div_cont_inner'>

                <DownloadImg show_download_popup={show_download_popup} title="תמונה חינם" subTitle="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"/>
                <DownloadImg show_download_popup={show_download_popup} title="pro" subTitle="תמונה מלאה" btn_text="הורד HD" small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"/>

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
                <button className='eula_img_btn' onClick={()=>setshow_eula_popup(true)}>תקנון חברה</button>

            </div>

          </div>

        </div>


        <div className='footer_cont'>
           <img src={banner} />
           <img src={logo} className='logo'/>
        </div>

    </div>


   {show_eula_popup? <>
        <div className='layout'></div>
        
        <div className='eula_popup'>
          <img src={close_img} className='close_popup_img' onClick={()=>setshow_eula_popup(false)}/>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.

לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.

קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.


        </div>
      </>:<></>}


      {show_download_popup_s? <>
      
        <div className='layout'></div>
        
        <div className='download_popup'>
          <img src={close_img_black} className='close_popup_img' onClick={()=>setshow_download_popup_s(false)}/>

          <div className='download_popup_top_div'>  </div>

          <div className='download_popup_title'>אישור להורדת התמונה</div>

          <div className='download_popup_subtitle'>האם להוריד את התמונה?</div>

          <div className='not_robot_cont'>
              <div className='checkbox_cont'>
                <input type="checkbox" />
                <div>אני לא רובוט</div>
              </div>

              <img src={not_robot} className='not_robot_icon'/>
          </div>


          <div className='btn_cont'>

              <div className='cancel_btn' onClick={()=>setshow_download_popup_s(false)}>ביטול</div>

              <div className='approve_btn'>אישור</div>

          </div>

        </div>
      </> : <></>}

    </>
  )
}

export default Bg

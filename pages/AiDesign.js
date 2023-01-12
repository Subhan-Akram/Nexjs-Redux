import React from 'react'
import s from "../styles/AiDesign.module.css"
import logo from "../images/logo.png"
import btn from "../images/btn1.svg"
import Image from 'next/image'
function AiDesign() {
  return (
   <div className={`${s.section_container}`}>
     <div className={`${s.section} bd_red`}>
            <div className={`${s.section_header} bd_blue`}>
                <div className={`${s.btn_grid} bd_green`}> <button className={`${s.section_header_btns}`}><Image  className={`${s.section_btn_img}`}  src={btn}></Image>&nbsp;&nbsp;Explain Code</button>
                {/* <p className={`${s.section_header_sm_text}`}>Examples of AI for Programming</p> */}
                </div>
               
<div> <button className={`${s.section_header_btns}`}><Image src={btn}></Image>Regex</button></div>          
      <div className={`${s.btn_grid}`}> <button className={`${s.section_header_btns}`}><Image className={`${s.section_btn_img}`}  src={btn}></Image>&nbsp;&nbsp;Convert Code</button></div>
                <div>
               <div className={`${s.btn_grid}`}><button className={`${s.section_header_btns}`}><Image  className={`${s.section_btn_img}`} src={btn}></Image>&nbsp;&nbsp;Fix Grammar</button></div>
                 <p className={`${s.section_header_sm_text}`}>Examples of AI for Content</p>
                </div>
                 <div className={`${s.btn_grid}`}><button className={`${s.section_header_btns}`}><Image  className={`${s.section_btn_img}`} src={btn}></Image>&nbsp;&nbsp;Todo</button></div>
                 <div    className={`${s.imageDiv}`}> <Image
      src={logo}
      alt="Picture of the author"
      className={`${s.image}`}
      // width={100}
      // height={100}
    />
    <p className={`${s.section_header_sm_text}`}>Powered By</p>
    </div>
            </div>
            <div className={`${s.section_header_down} bd_red`}>
              <p className={`${s.section_header_sm_text}`}>Examples of AI for Programming</p>
        
           
      </div>
            <div className={`${s.section_content_btn}`}>
                <button className={`${s.section_header_btns}`}><Image src={btn}></Image>Free Signup</button>
           <p className={`${s.section_header_title}`}>
           Use the latest AI features
           </p>
           <p className={`${s.section_header_sub_title}`}>
            Start enhancing a range of tasks using AI, from writing emails, code, or blogs, to rephrasing paragraph’s you just want to reword!
           </p>
           <div className={`${s.section_content_row} bd_red`}>
           <button className={`${s.section_content_col_btn} bd_red`}>
                   <div className={`${s.section_content_col} bd_red`} >
                  <div className={`${s.section_content_col_img} bd_red`}>    <Image style={{width:"100%",height:"100%"}}  src={btn}></Image></div>
                      <div className={`${s.section_content_col_div} bd_red`}>
                          <p className={s.section_content_col_sm_text}>Content</p>
                          <p className={s.section_content_col_lg_text}>Explain Code</p>
                          <p className={s.section_content_col_md_text}>Explain some code based on the syntax provided</p>
                      </div>
                   </div>
              </button>
             
             
              <button className={`${s.section_content_col_btn} bd_red`}>
                   <div className={`${s.section_content_col} bd_red`} >
                  <div className={`${s.section_content_col_img} bd_red`}>    <Image style={{width:"100%",height:"100%"}}  src={btn}></Image></div>
                      <div className={`${s.section_content_col_div} bd_red`}>
                          <p className={s.section_content_col_sm_text}>Content</p>
                          <p className={s.section_content_col_lg_text}>Explain Code</p>
                          <p className={s.section_content_col_md_text}>Explain some code based on the syntax provided</p>
                      </div>
                   </div>
              </button>
           </div>
            </div>
            
      </div>
     
   </div>
  )
}

export default AiDesign
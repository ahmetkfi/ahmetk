import React from 'react'
import style from './skills.module.css'
const Skills = () => {
  return (
    <section id='skills'>
        <div className={style.skills_container}>
            <div className={style.skills_header}>
                <h1 className={style.skills_header_h1}>Skills</h1>
                <span>My technical level</span>

                <div className={style.skillpoint_container}>
                    <span>Javascript</span>
                    <div className={style.skillpoint}>
                        <span style={{width:'50%'}} className={style.skillpoint_span}></span>
                    </div>
                </div>
                <div className={style.skillpoint_container}>
                    <span>Nodejs</span>
                    <div className={style.skillpoint}>
                        <span style={{width:'50%'}} className={style.skillpoint_span}></span>
                    </div>
                </div>
                <div className={style.skillpoint_container}>
                    <span>Next.js</span>
                    <div className={style.skillpoint}>
                        <span style={{width:'20%'}} className={style.skillpoint_span}></span>
                    </div>
                </div>

                <div className={style.skillpoint_container}>
                    <span>C#</span>
                    <div className={style.skillpoint}>
                        <span style={{width:'45%'}} className={style.skillpoint_span}></span>
                    </div>
                </div>
                <div className={style.skillpoint_container}>
                    <span>SQL</span>
                    <div className={style.skillpoint}>
                        <span style={{width:'65%'}} className={style.skillpoint_span}></span>
                    </div>
                </div>
 
                
           
            </div>
        </div>
    </section>
  )
}

export default Skills
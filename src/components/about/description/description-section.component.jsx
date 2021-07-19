import React from 'react';



import './description-section.styles.css';

const DescriptionSection = () => {
    return (
        <div className="description-section">
           <div className="description">
           <h5>Hello 👋</h5>
               <p>My name is John Nasimba. I am a passionate full-stack web developer living in Cape Town, South Africa. I was born in Malawi in 1997. </p>

               <p>I have been developing web applications since 2019. I teach myself new skills every day by taking courses online to advance my knowledge in the field of programming. I also develop complex web applications as I am a fun believer in practice makes perfect.</p>

               <p>I went to Lilongwe University Of Agriculture and Natural Resources (LUANAR) where I studied bachelor's degree in Agriculture. While growing up, my passion was to be a software engineer that’s why I switched to software development. </p>

               <p>My friends would describe me as a fast learner, hard-working, passionate, motivated, reliable, and highly productive person.</p>

               <p>My future goal is to be a reliable and skilled software engineer trusted by clients from all over the world.  </p>

               <p>You can check out my skills below, and don't forget to contact me for an interview and a possible job offer. </p>
           </div>
           <figure>
               <img  src="./images/John-nasimba(about-me).jpg" alt="" srcset="" className="description-section-image" />
           </figure>
        </div>
    )
}


export default DescriptionSection;
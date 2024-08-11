import React,{useEffect,useState} from 'react';

function SectionSelector({sections,sectionSelected,handleSectionChange}){
    return (
        <>
        {sections?(<>
    
         <label htmlFor="section">Choose a class:</label>
         <select id="section-selector" value={sectionSelected} onChange={handleSectionChange} name="classesdrpdwn">
               {sections.map((section)=>{
                                 return(
                              <option value={section.id} key= {section.name} name="section" id="section" >{section.name}</option>)})}
    </select>
              </>):null}

    </>)
}

export default SectionSelector
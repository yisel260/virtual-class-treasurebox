import React,{useEffect,useState} from 'react';
import { useOutletContext } from 'react-router-dom';


function SectionSelector({sections,sectionSelected,handleSectionChange}){
    const context = useOutletContext()
    return (
        <>
        <br />
        {context.sections?(<>
    
         <label htmlFor="section">Choose a class:</label>
         <select id="section-selector" value={sectionSelected} onChange={handleSectionChange} name="classesdrpdwn">
               {context.sections.map((section)=>{
                                 return(
                              <option value={section.id} key= {section.name} name="section" id="section" >{section.name}</option>)})}
    </select>
              </>):null}

    </>)
}

export default SectionSelector
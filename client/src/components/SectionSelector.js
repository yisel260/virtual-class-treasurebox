import React,{useEffect,useState} from 'react';
import { useOutletContext } from 'react-router-dom';


function SectionSelector(){
    const context = useOutletContext()
    return (
        <>
        <br />
        {context.sections?(<>
         <label htmlFor="section">Choose a class:</label>
         <select id="section-selector" value={context.sectionSelected} onChange={context.handleSectionChange} name="classesdrpdwn">
               {context.sections.map((section)=>{
                console.log(section)
                    console.log(section.name)
                                 return(
                              <option value={section.id} key= {section.id} name="section" id="section" >{section.name}</option>)})}
    </select>
              </>):null}

    </>)
}

export default SectionSelector
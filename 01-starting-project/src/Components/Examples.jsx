import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
    const [selectedTopic,setSelectedTopic] = useState()
    function handleClick(selectedButton){
      setSelectedTopic(selectedButton);
    }
    let tabContent = 'please select a topic'
  
    if(selectedTopic){
      tabContent = (
        <div>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )
    }
    return (
        <Section title='Examples' id="examples">
          <Tabs 
            buttonContainer= 'menu'
            button={
            <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            </>
          }>{tabContent}</Tabs>
          
        </Section>
    )
};
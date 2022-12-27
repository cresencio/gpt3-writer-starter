import Image from 'next/image';
import buildspaceLogo from '../../../assets/buildspace-logo.png';
import { useState } from 'react';
import Link from 'next/link';

const PitchIt = () => {

  const [userInput, setUserInput] = useState('');

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    
    const myModal = new bootstrap.Modal('#outputModal', {
      keyboard: false
    });

    const modalToggle = document.getElementById('modalToggle');
    
    myModal.show(modalToggle);
    modalToggle.style.display = "inline-block";
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root-playground">
         <div
      id="menubar"
      className="d-flex justify-content-between align-items-center"
    >
      <p className="m-0">
        <Link href="/dashboard">BootUp</Link>
        <span className="tagline">
          &nbsp;&mdash; Turn your ideas into action with AI-driven powerups.
        </span>
      </p>
      <a
        className="btn btn-link"
        href="https://twitter.com/cresencio"
        target="_blank"
      >
        Send feedback
      </a>
    </div>
      <div className="header">
          <div className="header-title">
            <h1>Playground</h1>
          </div>
          <div className="header-subtitle">
            <p>This powerup is a simple tool that allows you to interact with the
              OpenAI API. It is similar to the OpenAI Playground, but with a few
              less features.</p>
          </div>  
        </div>
      <div className="container">
        <div className="prompt-container">
          <p>Example: Generate some startup ideas for a money-saving app that uses web3 technology.</p>
          <textarea
            className="prompt-box"
            placeholder="Write a tagline for a donut shop."
            value={userInput}
            onChange={onUserChangedText}
          />
          
          <div className="prompt-buttons">
          <a class="modal-toggle" type="button" href="#" id="modalToggle" data-bs-toggle="modal" data-bs-target="#outputModal">View my pitch</a>
  <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Submit</p>}
    </div>
  </a>
</div>
<div id="outputModal" className="output modal fade">
        
  
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <div className="output-header-container">
      <div className="output-header">
        <h3>Response</h3>
      </div>
      <a href="#" class="close-link" data-bs-dismiss="modal">Close</a>
    </div>
      </div>
      <div class="modal-body">
      <div className="output-content">
      {apiOutput}
    </div>
      </div>
      <div class="modal-footer">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="I just turned my business idea into a pitch. Check it out! &lt;insert screenshot&gt;" data-hashtags="PitchIt" data-show-count="false">Tweet</a>
      </div>
    </div>
 
    
    
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default PitchIt;

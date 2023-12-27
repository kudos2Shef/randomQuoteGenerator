import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    const [count, setCount] = useState(0);
    const [quoteText,setQuoteText] = useState('Lost time is never found again')
    const [author,setAuthor] =useState('~ Laing Burns, Jr')
    const [styleColour,setStyleColour] = useState('')
    const hex="0123456789ABCDEF";
  const quotes=["Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ~ Martin Fowler","Look at usual things with unusual eyes. ~ Vico Magistetti","Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. ~ Eagleson's Law","Tell me and I forget. Teach me and I remember. Involve me and I learn. ~ Benjamin Franklin","Success often comes to those who have the aptitude to see way down the road. ~ Laing Burns, Jr",
    "I rate enthusiasm even above professional skill. ~ Edward Appleton",
    "There's no limit to what a man can achieve, if he doesn't care who gets the credit. ~ Laing Burns, Jr",
    "The world at large does not judge us by who we are and what we know; it judges us by what we have. ~ Joyce Brothers",
    "Imagination is everything. It is the preview of life's coming attractions. ~ Albert Einstein",
    "To have faith is to trust yourself to the water. When you swim you don't grab hold of the water, because if you do you will sink and drown. Instead you relax, and float. ~ Alan Watts",
    "Everything is in a state of flux, and this includes the world of chess. ~ Mikhail Botvinnik",
    "Real knowledge is to know the extent of one's ignorance. ~ Confucius",
    "We cannot solve our problems with the same thinking we used when we created them. ~ Albert Einstein"];
    
    function buttonClick(){
      const newQuote= randomGenerator(quotes);
      const newBg= getRandomColour();
      //console.log(newBg,hex[newBg]);
      const text=quotes[newQuote].split("~");//randomly generated text from array split into quotes=text[0] and author=text[1].
      document.body.style.backgroundColor=newBg;
      //console.log(text)
      setQuoteText(text[0])
      setAuthor("~ "+text[1])
      setStyleColour(newBg)
    //console.log(styleColour)
  
  
    }
    function randomGenerator(arr){
      return Math.floor(Math.random()*arr.length);
    
    }
  
    function getRandomColour(){
      let temp='#'
      for(let i=0;i<6;i++){
        temp=temp+hex[Math.floor(Math.random()*16)];
      }
      return temp;
    }

  return (
    <>
      <main id='main'>
			<div className="container" id="quote-box">
				<blockquote className='content-box'>
					<h3 className="quote-text" >
					<i className="fa fa-quote-left" style={{color:styleColour}}></i> <span className="color" id="text" style={{color:styleColour}}> {quoteText} {/* Lost time is never found again*/} </span>
                            <i className="fa fa-quote-right" style={{color:styleColour}}></i> 
					</h3>
					<h4 className="author_head"><span className="" id="author" style={{color:styleColour}}>  {author} {/*~ Laing Burns, Jr*/} </span>
                    </h4>
				</blockquote>
				<div className="link-box">
                            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" id="tweet-quote" className="tweet" style={{backgroundColor:styleColour}}>
                                <i className="fa-brands fa-x-twitter pics"></i>
                               
                            </a>
                        <button className="btn btn-hero" id="new-quote" style={{backgroundColor:styleColour}} onClick={buttonClick}>New Quote</button>
                        </div>
			</div>

			</main>
			<footer>
            <p id="footr">Challenge by <a href="https://codepen.io/kudos2Shef/pen/LYMQpOB" className="footr_a"> freeCodeCamp </a>. Coded by <a href="https://github.com/kudos2Shef/randomQuoteGenerator" className="footr_a">kudos2shef</a>.</p>
        	</footer>
    </>
  )
}

export default App;

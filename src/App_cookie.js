//import './App.css';

function App() {
  
    
	  
	  var fortunes = ["Luck is with you", "You will have a day filled with sunshine", "You will have a happy week ahead."]

	function FortuneCookie (props)
	{
		const getFortune = (e) => {
			var r = Math.round(Math.random() * props.sayings.length-1)
			var msg = props.sayings[r]
			alert(msg)
		}
		return <input type='button' value='Get Your Fortune'  onClick={(e) => getFortune(e)} />
	}
	
	
	return (
	
		<div><FortuneCookie sayings={fortunes} /></div>
	  
	 
  );
}

export default App;

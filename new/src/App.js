import React from 'react';
import axios from 'axios';

class App extends React.Component{

constructor (props){
super(props);
this.state = {
displayName : '',
lat : '',
lon : '',
showMap : false
}
}

getData=async(event)=>{
event.preventDefault();

let cityName=event.target.city.value;
console.log(cityName);


let URL= `https://eu1.locationiq.com/v1/search.php?key=pk.e98623dff1c928d4100d271b111bad0d&q=${cityName}&format=json`;

console.log(URL);

let getResult=await axios.get(URL);
// console.log(getResult.data[0].display_name);

this.setState ({
displayName : getResult.data[0].display_name,
lat : getResult.data[0].lat,
lon : getResult.data[0].lot,
showMap : true
})
}


render() {
  return (
      <>


      <h1>city explorer</h1>

      <form onSubmit={this.getData}>
  <input type='text' placeholder='enter city' name='city'/>

   <button type='submit'>Get Location</button>

      </form>


<p> {this.state.displayName}</p> 

{this.state.showMap&& <img src= {`https://maps.locationiq.com/v3/staticmap?key=pk.e98623dff1c928d4100d271b111bad0d&q&center=${this.state.lat},${this.state.lon}`} alt = 'map' />}
  </>

  )

  }
}

export default App;


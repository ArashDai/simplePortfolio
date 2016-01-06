var React = require('react');


var About = React.createClass({
  render:function(){
    return(
      
      <div className='container-fluid Card' id='aboutpage'>

        <p className='text-center'>
        
          Silvia Martignago Bettio, a native of Treviso, Italy,  brings Italian flair and influence to home styling. With a background in interior design and a passion for chic style, Silvia strives to compile rooms with sophistication and functionality.

        </p>  
       <hr/>
        <div className='row'>
          <img className='img-responsive center-block' src='../assets/aboutus.jpg' id='aboutpageimg'/>
         
        </div> 
       <hr/>
        <p className='text-center'>
         
              Lita Luhrsen is an MBA graduate and licensed realtor at Sotheby's International Realty with 20 years of extensive expertise in home remodeling and complete property makeovers. Lita is a true professional and savvy business woman who has first hand knowledge of what it takes to successfully sell a property for top value. 
        </p>
      
      
    </div>
  )}

});


module.exports = About;


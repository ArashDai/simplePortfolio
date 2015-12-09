var React = require('react');



var homepage = React.createClass({
 

  render:function(){
    return(

     <div className='container-fluid'id='homepage'>
     
      <div className='container-fluid Card' id='homepageimg'>
        
        <img src='http://i.imgur.com/4ruiKc0.jpg' id='homepageimg'/>

      </div>
      <div className='container-fluid text-center Card' id='homepagetxt'>
        
        ......Unlock inspiring visuals of stimulating spaces and chic transformations.
      </div>
      
      
     </div> 

  )}

});

module.exports = homepage;
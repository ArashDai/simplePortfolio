var React = require('react');


var About = React.createClass({
  render:function(){
    return(
      
      <div className='container-fluid' id='aboutpage'>

        <div className='container-fluid Card' >
        

        <p className='text-center'>
          Swiftly and economically furnish and accessorize a vacant property to appeal to potential buyers. CASA Home Stagers also bring on a professional home cleaning service to make a space sparkle and prepped for a speedy sale.
        </p>  
       <hr/>
        <div className='row'>
          <img className='col-xs-12 col-sm-offset-1 col-sm-5' src='https://i.imgur.com/QL0ERzN.jpg' id='aboutpageimg'/>
          <img className='hidden-xs col-sm-5' src='https://i.imgur.com/5ahvuoz.png' id='aboutpageimg'/>
        </div> 
       <hr/>
        <p className='text-center'>
         Emphasize a fresh look or stylish space with a change of scenery. From organization and finished carpentry to paint selection and complete furniture repurposing, CASA Home Stagers redefines spaces and adds innovative character.
          <br></br>
          Areas Served:  Greater Los Angeles


        </p>


      </div>
     

      </div>
  )}

});


module.exports = About;


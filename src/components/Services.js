var React = require('react');


var Services = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center' id='contactpage'>

          
            <p className='text-center'>
              Swiftly and economically furnish and accessorize a vacant property to appeal to potential buyers. CASA Home Staging preps a space by bringing in a professional home cleaning service to make the home sparkle.
            </p>  
              <hr/>
            <div className='row'>
              <img className='col-xs-12 col-sm-4 img-responsive' src='../assets/kitchentwo.jpg' id='servicepageimg'/>
              <img className='hidden-xs col-xs-12 col-sm-4 img-responsive' src='../assets/kitchenbefore.jpg' id='servicepageimg'/>
              <img className='hidden-xs col-sm-4 img-responsive' src='../assets/kitchenafter.jpg' id='servicepageimg'/>
            </div> 
               <hr/>
            <p className='text-center'>
             Emphasize a fresh look or stylish space with a change of scenery. From organization and finished carpentry to paint selection and complete furniture repurposing, CASA Home Staging redefines spaces and adds innovative character.
              <br></br>
              <br></br>
              Areas Served:  Greater Los Angeles
            </p>

           
      </div>

      )
  }

});


module.exports = Services;
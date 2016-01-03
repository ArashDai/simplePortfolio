var React = require('react');


var Services = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center' id='contactpage'>

          <div className='container-fluid Card' >
        

            <p className='text-center'>
              Swiftly and economically furnish and accessorize a vacant property to appeal to potential buyers. CASA Home Staging preps a space by bringing in a professional home cleaning service to make the home sparkle.
            </p>  
              <hr/>
            <div className='row'>
              <img className='col-xs-12 col-sm-offset-1 col-sm-5 img-responsive' src='../assets/kitchenbefore.jpg' id='aboutpageimg'/>
              <img className='hidden-xs col-sm-5 img-responsive' src='../assets/kitchenafter.jpg' id='aboutpageimg'/>
            </div> 
               <hr/>
            <p className='text-center'>
             Emphasize a fresh look or stylish space with a change of scenery. From organization and finished carpentry to paint selection and complete furniture repurposing, CASA Home Staging redefines spaces and adds innovative character.
              <br></br>
              Areas Served:  Greater Los Angeles
            </p>

          </div>
        
      </div>

      )
  }

});


module.exports = Services;
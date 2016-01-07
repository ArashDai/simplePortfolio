var React = require('react');


var Services = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center' id='contactpage'>

          
            <p className='text-center'>
             Appeal to potential buyers by accessorizing a vacant property. Emphasize a fresh look or stylish space swiftly and economically.
            </p>  
              <hr/>
            <div className='row'>
              <img className='hidden-xs col-xs-12 col-sm-3 img-responsive' src='../assets/kitchenbefore.jpg' id='servicepageimg'/>
              <img className='col-xs-12 col-sm-3 img-responsive' src='../assets/kitchentwo.jpg' id='servicepageimg'/>
              
              <img className='hidden-xs col-sm-3 img-responsive' src='../assets/masterbathbefore.jpg' id='servicepageimg'/>
              <img className='hidden-xs col-sm-3 img-responsive' src='../assets/masterbathafter.jpg' id='servicepageimg'/>
            </div> 
               <hr/>
            <p className='text-center'>
             CASA Home Staging redefines spaces and adds innovative character. From organization and finished carpentry to paint selection, cleaning, and complete furniture repurposing.
              <br></br>
              <br></br>
              Areas Served:  Greater Los Angeles
            </p>
           
      </div>

      )
  }

});


module.exports = Services;
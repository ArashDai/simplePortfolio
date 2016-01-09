var React = require('react');


var Services = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card' id='contactpage'>

          
            <p className='text-center'>
             Appeal to potential buyers by accessorizing a vacant property. Emphasize a fresh look or stylish space swiftly and economically.
            </p>  
              <hr/>
            <div className='row'>
                <div className='hidden-xs col-sm-offset-3 col-sm-3' data-toggle="modal" href='#a'>
                  <img className='img-responsive' src='../assets/kitchenbefore.jpg' id='servicepageimg' />
                    <p className='text-center'>Before</p>
                </div>

                <div className='hidden-xs col-sm-3' data-toggle="modal" href='#b'>
                  <img className='img-responsive' src='../assets/kitchentwo.jpg' id='servicepageimg'/>
                    <p className='text-center'>After</p>
                </div> 

                <div className='hidden-xs  col-sm-offset-3 col-sm-3' data-toggle="modal" href='#c'>
                  <img className='img-responsive col-sm-12' src='../assets/masterbathbefore.jpg' id='servicepageimg'/>
                    <p className='text-center'>Before</p>
                </div> 

                <div className='col-xs-12 col-sm-3' data-toggle="modal" href='#d'> 
                  <img className='col-xs-12 img-responsive' src='../assets/masterbathafter.jpg' id='servicepageimg'/>
                    <p className='hidden-xs text-center'>After</p>
                </div>  

            </div> 

               <hr/>

            <p className='text-center'>
             CASA Home Staging redefines spaces and adds innovative character. From organization and finished carpentry to paint selection, cleaning, and complete furniture repurposing.
              <br></br>
              <br></br>
              Areas Served:  Greater Los Angeles
            </p>
          

            <div className="modal fade"  id="a">
                  <div className="modal-dialog modal-lg" >
                    <div className="modal-content" id="modalStyles">
                      <div className="modal-body">
                        <img className="img-responsive" id='modalImg' src='../assets/kitchenbefore.jpg' />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal fade"  id="b">
                  <div className="modal-dialog modal-lg" >
                    <div className="modal-content" id="modalStyles">
                      <div className="modal-body">
                        <img className="img-responsive" id='modalImg' src='../assets/kitchentwo.jpg' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal fade"  id="c">
                  <div className="modal-dialog modal-lg" >
                    <div className="modal-content" id="modalStyles">
                      <div className="modal-body">
                        <img className="img-responsive" id='modalImg' src='../assets/masterbathbefore.jpg' />
                      </div>
                    </div>
                  </div>
                </div>  
              
                <div className="modal fade"  id="d">
                  <div className="modal-dialog modal-lg" >
                    <div className="modal-content" id="modalStyles">
                      <div className="modal-body">
                        <img className="img-responsive" id='modalImg' src='../assets/masterbathafter.jpg' />
                      </div>
                    </div>
                  </div>
                </div>


      </div>

      )
  }

});


module.exports = Services;
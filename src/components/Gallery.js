var React = require('react');


var Gallery = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center' id='contactpage'>

          <a data-toggle="modal" href='#1'>  
            <img id='galleryimage' src='../assets/livingroomone.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#2'>
            <img id='galleryimage' src='../assets/bedroomone.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#3'>
            <img id='galleryimage' src='../assets/bathroomone.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#4'>
            <img id='galleryimage' src='../assets/livingroomfour.png' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#5'> 
            <img id='galleryimage' src='../assets/livingroomtwo.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#6'>  
            <img id='galleryimage' src='../assets/livingroomfive.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#7'>  
            <img id='galleryimage' src='../assets/kitchenone.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#8'>
            <img id='galleryimage' src='../assets/livingroomthree.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#9'>  
            <img id='galleryimage' src='../assets/bedroomfive.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#10'>
            <img id='galleryimage' src='../assets/livingroomseven.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#11'>
            <img id='galleryimage' src='../assets/livingroomsix.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#12'>
            <img id='galleryimage' src='../assets/kitchenafter.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#13'>
            <img id='galleryimage' src='../assets/bedroomtwo.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#14'>
            <img id='galleryimage' src='../assets/bedroomfour.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a> 


            <div className="modal fade"  id="1">
              <div className="modal-dialog modal-lg" >
                <div className="modal-content" id="modalStyles">
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="2">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">           
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/bedroomone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="3">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                 
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/bathroomone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="4">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomfour.png' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="5">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomtwo.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="6">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomfive.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="7">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/kitchenone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="8">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomthree.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="9">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/bedroomfive.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="10">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomseven.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="11">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomsix.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="12">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/kitchenafter.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="13">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/bedroomtwo.jpg' />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal fade" id="13">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/bedroomfour.jpg' />
                  </div>
                </div>
              </div>
            </div>




      </div>
  )}

});



module.exports = Gallery;


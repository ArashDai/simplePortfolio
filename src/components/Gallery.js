var React = require('react');


var Gallery = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center row' id='contactpage'>
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



            <div className="modal fade" id="1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="2">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/bedroomone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="3">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/bathroomone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="4">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomfour.png' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="5">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomtwo.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="6">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomfive.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="7">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/kitchenone.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="8">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomthree.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="9">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/bedroomfive.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="10">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomseven.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="11">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="img-responsive" src='../assets/livingroomsix.jpg' />
                  </div>
                </div>
              </div>
            </div>

            




      </div>
  )}

});



module.exports = Gallery;


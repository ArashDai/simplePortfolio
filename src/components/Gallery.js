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
            <img id='galleryimage' src='../assets/masterbathafter.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
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
            <img id='tallImgGallery' src='../assets/livingroomthree.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#9'>  
            <img id='galleryimage' src='../assets/bedroomfive.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#10'>
            <img id='galleryimage' src='../assets/livingroomsevenrect.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#11'>
            <img id='galleryimage' src='../assets/livingroomsixrect.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>  
          <a data-toggle="modal" href='#12'>
            <img id='galleryimage' src='../assets/kitchenafter.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#13'>
            <img id='galleryimage' src='../assets/bedroomtwo.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#14'>
            <img id='tallImgGallery' src='../assets/boysbedroom.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#15'>
            <img id='tallImgGallery' src='../assets/couch.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a>
          <a data-toggle="modal" href='#16'>
            <img id='tallImgGallery' src='../assets/statue.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
          </a> 
          <a data-toggle="modal" href='#17'>
            <img id='galleryimage' src='../assets/kitchentwo.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
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
                    <img className="img-responsive" id='modalImg' src='../assets/masterbathafter.jpg' />
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
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomsevenrect.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="11">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/livingroomsixrect.jpg' />
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
            
            <div className="modal fade" id="14">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive" id='modalImg' src='../assets/boysbedroom.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="15">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive center-block" id='tallImgModal' src='../assets/couch.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="16">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive center-block" id='tallImgModal' src='../assets/statue.jpg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="17">
              <div className="modal-dialog modal-lg">
                <div className="modal-content" id="modalStyles">
                  
                  <div className="modal-body">
                    <img className="img-responsive center-block" id='modalImg' src='../assets/kitchentwo.jpg' />
                  </div>
                </div>
              </div>
            </div>




      </div>
  )}

});



module.exports = Gallery;


var React = require('react');


var Gallery = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center row' id='contactpage'>

            <img id='galleryimage' src='https://i.imgur.com/G67omui.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>

            <img id='galleryimage' src='https://i.imgur.com/KUTQ1M8.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>

            <img id='galleryimage' src='https://i.imgur.com/QL0ERzN.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>

            <img id='galleryimage' src='https://i.imgur.com/5ahvuoz.png' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
           
            <img id='galleryimage' src='https://i.imgur.com/4ruiKc0.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>

            <img id='galleryimage' src='https://i.imgur.com/DdMEszs.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>
            
            <img id='galleryimage' src='https://i.imgur.com/3oHnSiL.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>

            <img id='galleryimage' src='https://i.imgur.com/cvMfe49.jpg' className='img-responsive col-xs-12 col-sm-4 col-md-3 col-lg-2'/>

      </div>
  )}

});



module.exports = Gallery;


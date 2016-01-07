var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;


var homepage = React.createClass({
 

  render:function(){
    return(

     <div className='container-fluid no-gutters'id='homepage'>
     
        <div id="carousel-id" className="carousel slide" data-ride="carousel">
           
            <div className="carousel-inner">
                <div className="item active">

                    <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" 
                      alt="First slide" src="../assets/livingroomtworect.jpg"
                      id='homepageimg'className='center-block img-responsive'/>

                    <div className="container">
                        <div className="carousel-caption hidden-xs" id='carouseltxt'>
                            <h1 className='text-center'>
                              ...Unlock inspiring visuals of stimulating spaces
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="../assets/bedroomonerect.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption hidden-xs" id='carouseltxt'>
                            <h1 className='text-center'>
                              ...Chic transformations
                            </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/services" role="button">Learn more</Link>
                            </p>
                        </div>
                    </div>
                </div>

                 <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Fourth slide" alt="Third slide" src="../assets/bedroomfiverect.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption hidden-xs" id='carouseltxt'> 
                          <h1 className='text-center' >
                            See more
                          </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Fifth slide" alt="Third slide" src="../assets/livingroomsixrect.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption hidden-xs" id='carouseltxt'> 
                          <h1 className='text-center' >
                            See more
                          </h1>
                            <p ><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Sixth slide" alt="Third slide" src="../assets/livingroomsevenrect.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption hidden-xs" id='carouseltxt'> 
                          <h1 className='text-center'>
                            See more
                          </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
            <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
        </div>


        <div className='Card center-block visible-xs'>
          <h1 className='text-center' >
              ...Unlock inspiring visuals of stimulating spaces 
          </h1>
          <Link  to="/gallery">
            <p className="text-center" id='browntext'>
              See more
            </p>
          </Link>
        </div>  
        <div className='Card center-block visible-xs'>
          <h1 className='text-center' >
                              ...Chic transformations
          </h1>
          <Link  to="/services">
            <p className="text-center" id='browntext'>
              Learn more
            </p>
          </Link>




          

        </div>






      
     </div> 

  )}

});

module.exports = homepage;



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
                      alt="First slide" src="../assets/livingroomtwo.jpg"
                      id='homepageimg'className='center-block img-responsive'/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1 className='text-center' id='carouseltxt'>
                              ...Unlock inspiring visuals of stimulating spaces
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="../assets/bedroomone.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1 className='text-center' id='carouseltxt'>
                              ...Chic transformations
                            </h1> 
                            <p><Link className="btn btn-lg btn-primary" to="/about" role="button">Learn more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="../assets/bathroomone.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption"> 
                          <h1 className='text-center' id='carouseltxt'>
                            See more
                          </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link></p>
                        </div>
                    </div>
                </div>

                 <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Fourth slide" alt="Third slide" src="../assets/bedroomfive.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption"> 
                          <h1 className='text-center' id='carouseltxt'>
                            See more
                          </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link></p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Fifth slide" alt="Third slide" src="../assets/livingroomsix.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption"> 
                          <h1 className='text-center' id='carouseltxt'>
                            See more
                          </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link></p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Sixth slide" alt="Third slide" src="../assets/livingroomseven.jpg" id='homepageimg' className='center-block img-responsive'/>
                    <div className="container">
                        <div className="carousel-caption"> 
                          <h1 className='text-center' id='carouseltxt'>
                            See more
                          </h1>
                            <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link></p>
                        </div>
                    </div>
                </div>

            </div>
            <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
            <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
        </div>
      
     </div> 

  )}

});

module.exports = homepage;



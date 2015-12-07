var React = require('react');


var Gallery = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid' id='contactpage'>

        <div className='container-fluid Card text-center'>

        

        </div>

      </div>
  )}

});



module.exports = Gallery;


/*






module.exports = Gallery;


var React = require('react');

var img1 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img2 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img3 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img4 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img5 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img6 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img7 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');
var img8 = require('.../client/assets/4333107736_b200fb2fa0_o.jpg');

var Data = [img1,img2,img3,img4,img5,img6,img7,img8];


var Gallery = React.createClass({
  loadData:function(){
    this.setState({
      images:this.Data
    })
  },
  
 getInitialState: function(){
    return {
      images:null
    };
  },

  componentDidMount: function() {
    this.loadData();
  },

  render:function(){
    return(
      

      <div className='container-fluid'>

        <div className='container-fluid Card text-center'>
        hello
        
            

        </div>

      </div>
  )}

  } );



module.exports = Gallery;









*/
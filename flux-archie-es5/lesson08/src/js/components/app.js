var React = require('react');
var Catalog = require('./catalog/app-catalog');
var Cart = require('./cart/app-cart');
var CatalogDetail = require('./catalog/app-catalogitem');
var Template = require('./app-template');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
    render:function(){
        return (
          <Template>
            <Locations>
              <Location path="/"            handler={Catalog}/>
              <Location path="/cart"        handler={Cart} />
              <Location path="/item/:item"  handler={CatalogDetail} />
            </Locations>
          </Template>
        );
    }
});

module.exports = App;

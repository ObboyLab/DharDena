

const City = require('../models').City;
// Post a City name
module.exports = {
    create(req, res) {	
    // Save to MySQL database
    
    City.create({ 
	  city_name: req.body.city_name,
	}).then(city => {	
        console.log(city);	
		// Send created city to client
        res.send(city);
    });
},
// FETCH all Cities 
    findAll (req, res) {
        
    City.findAll()
   .then(cities => {
      console.log(cities);
    // We don't need spread here, since only the results will be returned for select queries
    res.send(cities);
  });
},

// FETCH one city
    findOne(req, res) {
    City.findOne(
        {where : {city_name : req.params.city_name}})
    .then(city => {
        res.send(city);
    });
},
    
    updateCityName(req, res){
    City.findOne(
        {where : {city_name : req.params.city_name}}
    )
    .then( city =>{
        city.updateAttributes({
            city_name : 'Hi'
        });
        res.send(city);
    });
},

    deleteCity(req, res) {
    City.destroy({
        where : {city_name: req.params.city_name}
    })
    .then(deletedCity => {
        console.log(`Has the Max been deleted? 1 means yes, 0 means no: ${deletedCity}`);
        res.json({ deleted : 'yes'}).send();
      });
}
};



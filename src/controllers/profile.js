

const Profile = require('../models').Profile;
// Post a Profile 
module.exports = {
    create(req, res) {	
    // Save to MySQL database
    
    Profile.create({ 
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      middle_name: req.body.middle_name,
      dob: req.body.dob,
      streetAddress: req.body.streetAddress,
      tfn: req.body.tfn,
      post_code: req.body.post_code,
      phone_number: req.body.phone_number,
      user_id: req.body.user_id,
      city_id: req.body.city_id

	}).then(profile => {	
        console.log(profile);	
		// Send created city to client
        res.send(profile);
    });
},
// FETCH all profiles 
    findAll (req, res) {
        
    Profile.findAll()
   .then(profiles => {
      console.log(profiles);
    // We don't need spread here, since only the results will be returned for select queries
    res.send(profiles);
  });
},

// FETCH one profile using phoneNumber
   findOneUsingPhoneNumber(req, res) {
    Profile.findOne(
        {where : {phone_number : req.params.phone_number}})
    .then(profile => {
        res.send(profile);
    });
},
    findOneUsingUserID(req, res){
        Profile.findOne(
            { where :{user_id : req.params.user_id}
        })
        .then(profile => {
            res.send(profile);
        });
    },
    
    updateFirstName(req, res){
    Profile.findOne(
        {where : {user_id : req.params.user_id}}
    )
    .then( profile =>{
        profile.updateAttributes({
            first_name : "No_Name"
        });
        console.log(profile);
        res.send(profile);
    });
},

    deleteProfile(req, res) {
    Profile.destroy({
        where : {user_id: req.params.user_id}
    })
    .then(deletedProfile => {
        console.log(`Has the Max been deleted? 1 means yes, 0 means no: ${deletedProfile}`);
        res.json({ deleted : 'yes'}).send();
      });
}
};



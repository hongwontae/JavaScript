const express = require('express');

const router = express.Router();

const locationStorage = {
  locations : []
};

router.post('/add-location',(req, res, next)=>{
  locationStorage.locations.push({
    id : Math.random(),
    address : req.body.address,
    coords : {lat : req.body.lat, lng : req.body.lng}
  });
  res.json({message : 'Stored location!'});
})
// post를 통해 데이터를 얻는다.
// 이를 DB에 저장한다.

router.get('/location',(req, res, next)=>{

})
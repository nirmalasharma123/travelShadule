const express=require("express");
const router = express.Router();
const userController = require("../controller/user");
const {authenticateToken} =require("../middle/middle");
const {deleteItinerary,updateItinerary,getItineraryById,createItinerary,getItineraries} = require("../controller/travel")



router.post("/signUp",userController.user);
router.post("/login",userController.login);
router.get('/itineraries', authenticateToken, getItineraries);
router.post('/itineraries', authenticateToken, createItinerary);
router.get('/itineraries/:id', authenticateToken, getItineraryById);
router.put('/itineraries/:id', authenticateToken, updateItinerary);
router.delete('/itineraries/:id', authenticateToken,deleteItinerary);





module.exports= router
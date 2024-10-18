const express = require("express");
const router = express.Router();
const {
  allcatagories,
  backgrounds,
  fashion,
  nature,
  science,
  education,
  feelings,
  health,
  people,
  religion,
  places,
  animals,
  industry,
  computer,
  food,
  sports,
  transportation,
  travel,
  buildings,
  business,
  music,
  search,
} = require("../controllers/allCatagory");

router.route("/all").get(allcatagories);
router.route("/backgrounds").get(backgrounds);
router.route("/fashion").get(fashion);
router.route("/nature").get(nature);
router.route("/science").get(science);
router.route("/education").get(education);
router.route("/feelings").get(feelings);
router.route("/health").get(health);
router.route("/people").get(people);
router.route("/religion").get(religion);
router.route("/places").get(places);
router.route("/animals").get(animals);
router.route("/industry").get(industry);
router.route("/computer").get(computer);
router.route("/food").get(food);
router.route("/sports").get(sports);
router.route("/transportation").get(transportation);
router.route("/travel").get(travel);
router.route("/buildings").get(buildings);
router.route("/business").get(business);
router.route("/music").get(music);
// this route for the searching the image 
router.route('/search').post(search);

module.exports = router;

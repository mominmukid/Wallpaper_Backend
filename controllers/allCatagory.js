

require("dotenv").config();

const apikey = process.env.API_KEY;
const apiurl = process.env.API_URL;

const allcatagories = async (req, res) => {
  const response = await fetch(`${apiurl}/?key=${apikey}&q=all&per_page=200`);
  const data = await response.json();
  res.json(data);
};

const backgrounds = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=backgrounds&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const fashion = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=fashion&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const nature = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=nature&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const science = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=science&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const education = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=education&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const feelings = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=feelings&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const health = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=health&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const people = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=people&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const religion = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=religion&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};

const places = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=places&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const animals = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=animals&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const industry = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=industry&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const computer = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=computer&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const food = async (req, res) => {
  const response = await fetch(`${apiurl}/?key=${apikey}&q=food&per_page=200`);
  const data = await response.json();
  res.json(data);
};

const sports = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=sports&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const transportation = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=transportation&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const travel = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=travel&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const buildings = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=buildings&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const business = async (req, res) => {
  const response = await fetch(
    `${apiurl}/?key=${apikey}&q=business&per_page=200`
  );
  const data = await response.json();
  res.json(data);
};
const music = async (req, res) => {
  const response = await fetch(`${apiurl}/?key=${apikey}&q=music&per_page=200`);
  const data = await response.json();
  res.json(data);
};

const search =async(req,res)=>{
   const searchterm=req.body;
   const response = await fetch(`${apiurl}/?key=${apikey}&q=${searchterm}&per_page=200`);
   const data = await response.json();
   res.json(data);
   

}

module.exports = {
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
};

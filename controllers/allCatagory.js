require("dotenv").config();

const apikey = process.env.API_KEY;
const apiurl = process.env.API_URL;

const allcatagories = async (req, res) => {
  try {
    const response = await fetch(`${apiurl}/?key=${apikey}&q=all&per_page=200`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const backgrounds = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=backgrounds&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const fashion = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=fashion&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const nature = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=nature&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const science = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=science&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const education = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=education&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const feelings = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=feelings&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const health = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=health&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {}
};

const people = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=people&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const religion = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=religion&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const places = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=places&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const animals = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=animals&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const industry = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=industry&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const computer = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=computer&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const food = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=food&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const sports = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=sports&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const transportation = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=transportation&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const travel = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=travel&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const buildings = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=buildings&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const business = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=business&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};
const music = async (req, res) => {
  try {
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=music&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

const search = async (req, res) => {
  try {
    const searchterm = req.body;
    const response = await fetch(
      `${apiurl}/?key=${apikey}&q=${searchterm}&per_page=200`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw error;
  }
};

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

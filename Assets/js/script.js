//Array of objects with all my project information stored
const projects = [
  {
    title: "Recipe Box",
    deployed: "https://gitoffmyfarm.github.io/Project-One-Recipe-Box/",
    image: "./Assets/Pictures/RecipeBoxImage.png",
    imageAlt: "A still image of the home/search screen",
    description: "An app used to search for recipes and save the ones you love the most. Heavy use of API's and local storage, currently only deployed in Github pages.",
    gitHubLink: "https://github.com/GitOffMyFarm/Project-One-Recipe-Box"
  },
  {
    title: "Note Taking App",
    deployed: "https://mysterious-bastion-22749.herokuapp.com/",
    image: "./Assets/Pictures/NoteTaker.png",
    imageAlt: "Front page of note taking application",
    description: "An app for writing, saving, and deleting personal notes that launches and works in the browser.",
    gitHubLink: "https://github.com/GitOffMyFarm/Note-Taking-App"
  },
  {
    title: "Password Generator",
    deployed: "https://gitoffmyfarm.github.io/Password-Generator/",
    image: "./Assets/Pictures/PasswordGenerator.png",
    imageAlt: "Snapshot of the password generator launched",
    description: "A password generator made to meet a variety of password requirements, utilizes checkboxes in HTML and innerText to convey error messages rather than alerts.",
    gitHubLink: "https://github.com/GitOffMyFarm/Password-Generator"
  },
  {
    title: "Team Profile Generator",
    deployed: "https://drive.google.com/file/d/1I8yGlXU2c7xd2mSwAVAwOgrwyZU9DCJW/view",
    image: "./Assets/Pictures/generator.PNG",
    imageAlt: "Picture of generated team profile",
    description: "Console application using inquirer to obtain information about a work team before generator a html page with all that information displayed.",
    gitHubLink: "https://github.com/GitOffMyFarm/Profile-Generator"
  }
];
//Function that writes a card into the the HTML
const pushCards = (u, v, w, x, y, z) => {
  $('#card-container').append(
    `<div class="card col-md-5 col-sm-12 d-flex align-items-stretch m-2">
    <img class="card-img-top img-fluid" src=${w} alt=${x}>
    <div class="card-body">
      <h5 class="card-title">${u}</h5>
      <p class="card-text">${y}</p>
      <a href=${v} target="_blank" class="btn btn-primary">Deployed App</a>
      <a href=${z} target="_blank" class="btn btn-success">Github Link</a>
    </div>
  </div>
  `
  )
};
//Function that takes each item in the array, parses out all the objects into their own variables, and writes it into the HTML
const generateCards = () => {
  for (const value of projects) {
    const {title, deployed, image, imageAlt, description, gitHubLink} = value;
    pushCards(title, deployed, image, imageAlt, description, gitHubLink);
  };
};
//Calls above function as soon as the page is launched
generateCards();
let rules = {
    "JavaScript": ["#Code# #Car#!", "#Name#", "#Poetry#"],
    "Code": ["It is an amazin programming language"],
			 
			 
    "Car": ["Java", "Python", "Ruby", "Php"],
    "Name": ["Davalo", "Patrick", "Paul", "Kelly", "Alexandar", "Oscar"],
    "Poetry": ["Scarcely had the demon cast, his burning stare upon her, livin her face with symmety, leaving her face without form, as her lips touched his fingertips, he melted into her."]
  };
  
 let grammar;
  //function that calls the GenerateCode() when the button is clicked
  function GenerateCode(){
    grammar = tracery.createGrammar(rules);
    let result = grammar.flatten("#JavaScript#");
    //prints out the results 
    console.log(result);

    //renders to the html Webpage
    let storyOutput = document.getElementById("storyOutput");
    storyOutput.textContent = result;
  }
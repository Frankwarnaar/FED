/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var stage = document.getElementById("stage");
var project = document.getElementById("project");
var radioProject = document.querySelector("fieldset:nth-of-type(2)>label:first-of-type");
var radioStage = document.querySelector("fieldset:nth-of-type(2)>label:nth-of-type(2)");
var video = document.getElementsByTagName("video")[0];

stage.classList.add("noHeight");
project.classList.add("noHeight");

radioProject.addEventListener("click", function(){
	if (project.classList.contains("noHeight")){
		stage.classList.add("noHeight");
		project.classList.add("noHeight");
		setTimeout(function(){
			project.classList.remove("noHeight");
		}, 600);
	}
});

radioStage.addEventListener("click", function(){
	if (stage.classList.contains("noHeight")){
		stage.classList.add("noHeight");
		project.classList.add("noHeight");
		setTimeout(function(){
			stage.classList.remove("noHeight");
		}, 600);
	}
});

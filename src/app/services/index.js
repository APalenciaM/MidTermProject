
const projectApi = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";


function ChargeProjects() {
    fetch(projectApi)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        document.getElementById("titleProject1").innerHTML = data[1].name;
        document.getElementById("titleProject2").innerHTML = data[2].name;
        document.getElementById("titleProject3").innerHTML = data[3].name;

        document.getElementById("contentProject1").innerHTML = data[1].description;
        document.getElementById("contentProject2").innerHTML = data[2].description;
        document.getElementById("contentProject3").innerHTML = data[3].description;
        
        document.getElementById("project1image").src = data[1].image;
        document.getElementById("project2image").src = data[2].image;
        document.getElementById("project3image").src = data[3].image;



        document.getElementById("actualTitle").innerHTML = data[0].name;
        document.getElementById("subTitle").innerHTML = data[0].description;
        document.getElementById("completedon").innerHTML = data[0].completed_on;
        document.getElementById("actualImage").src = data[0].image;
        document.getElementById("actualDescription").innerHTML = data[0].content;


        document.getElementById("event1").onclick = SelectProject1;
        document.getElementById("event2").onclick = SelectProject2;
        document.getElementById("event3").onclick = SelectProject3;
    })

}

function SelectProject1() {
    fetch(projectApi)
    .then((resp) => resp.json())
    .then(function(data) {
        let actualvalue = document.getElementById("actualvalue").innerHTML;
        let desiredproject = document.getElementById("project1value").innerHTML;


        document.getElementById("actualTitle").innerHTML = data[desiredproject].name;
        document.getElementById("subTitle").innerHTML = data[desiredproject].description;
        document.getElementById("completedon").innerHTML = data[desiredproject].completed_on;
        document.getElementById("actualImage").src = data[desiredproject].image;
        document.getElementById("actualDescription").innerHTML = data[desiredproject].content;

        document.getElementById("titleProject1").innerHTML = data[actualvalue].name;
        document.getElementById("contentProject1").innerHTML = data[actualvalue].description;
        document.getElementById("project1image").src = data[actualvalue].image;

        document.getElementById("actualvalue").innerHTML = desiredproject;
        document.getElementById("project1value").innerHTML = actualvalue;
    })
}

function SelectProject2() {
    fetch(projectApi)
    .then((resp) => resp.json())
    .then(function(data) {
        let actualvalue = document.getElementById("actualvalue").innerHTML;
        let desiredproject = document.getElementById("project2value").innerHTML;


        document.getElementById("actualTitle").innerHTML = data[desiredproject].name;
        document.getElementById("subTitle").innerHTML = data[desiredproject].description;
        document.getElementById("completedon").innerHTML = data[desiredproject].completed_on;
        document.getElementById("actualImage").src = data[desiredproject].image;
        document.getElementById("actualDescription").innerHTML = data[desiredproject].content;

        document.getElementById("titleProject2").innerHTML = data[actualvalue].name;
        document.getElementById("contentProject2").innerHTML = data[actualvalue].description;
        document.getElementById("project2image").src = data[actualvalue].image;

        document.getElementById("actualvalue").innerHTML = desiredproject;
        document.getElementById("project2value").innerHTML = actualvalue;
    })
}

function SelectProject3() {
    fetch(projectApi)
    .then((resp) => resp.json())
    .then(function(data) {
        let actualvalue = document.getElementById("actualvalue").innerHTML;
        let desiredproject = document.getElementById("project3value").innerHTML;


        document.getElementById("actualTitle").innerHTML = data[desiredproject].name;
        document.getElementById("subTitle").innerHTML = data[desiredproject].description;
        document.getElementById("completedon").innerHTML = data[desiredproject].completed_on;
        document.getElementById("actualImage").src = data[desiredproject].image;
        document.getElementById("actualDescription").innerHTML = data[desiredproject].content;

        document.getElementById("titleProject3").innerHTML = data[actualvalue].name;
        document.getElementById("contentProject3").innerHTML = data[actualvalue].description;
        document.getElementById("project3image").src = data[actualvalue].image;

        document.getElementById("actualvalue").innerHTML = desiredproject;
        document.getElementById("project3value").innerHTML = actualvalue;
    })
}
// When "Show Profile" button is clicked
document.getElementById("showProfileBtn").onclick = function () {

    // Get basic values
    var name = document.getElementById("studentName").value;
    var course = document.getElementById("courseName").value;

    // Get skill inputs manually (simple way)
    var skill1 = document.getElementsByClassName("skill")[0].value;
    var skill2 = document.getElementsByClassName("skill")[1].value;
    var skill3 = document.getElementsByClassName("skill")[2].value;
    var skill4 = document.getElementsByClassName("skill")[3].value;
    var skill5 = document.getElementsByClassName("skill")[4].value;

    // Put values into popup fields
    document.getElementById("popupName").innerHTML = name;
    document.getElementById("popupCourse").innerHTML = course;

    // Add skills into popup list
    var skillList = document.getElementById("popupSkills");
    skillList.innerHTML = ""; // Clear previous entries

  if (skill1 !== "") {
    skillList.innerHTML += "<li>" + skill1 + "</li>";
}

if (skill2 !== "") {
    skillList.innerHTML += "<li>" + skill2 + "</li>";
}

if (skill3 !== "") {
    skillList.innerHTML += "<li>" + skill3 + "</li>";
}

if (skill4 !== "") {
    skillList.innerHTML += "<li>" + skill4 + "</li>";
}

if (skill5 !== "") {
    skillList.innerHTML += "<li>" + skill5 + "</li>";
}
    // Show popup
    document.getElementById("popup").style.display = "flex";
};

// Close popup when "Close" button clicked
document.getElementById("closePopup").onclick = function () {
    document.getElementById("popup").style.display = "none";
};

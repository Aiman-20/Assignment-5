function disableButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.setAttribute("disabled", "true");
    button.classList.add("opacity-40", "cursor-not-allowed");
}

function taskAssigned (id){
    var taskAssigned = document.getElementById(id).innerText;
    convertedTaskAssigned = parseInt(taskAssigned);
    newTaskAssigned = convertedTaskAssigned - 1;
    document.getElementById(id).innerText = newTaskAssigned;

    if(newTaskAssigned === 0)
    {
        alert("you've completed one task")
        alert("you completed all")
    }
    else{
        alert("you've completed one task")
    }
}
function taskCompleted (id){
    const taskCompleted = document.getElementById(id).innerText;
    convertedTaskCompleted= parseInt(taskCompleted);
    newTaskCompleted = convertedTaskCompleted + 1;
    document.getElementById(id).innerText = newTaskCompleted;

}

function appendTaskHistory(parentId, task) {
    var parent = document.getElementById(parentId);
    var p = document.createElement("p");
    p.innerText = task;
    p.className = "bg-gray-200 text-gray-700 border p-2 mb-2 rounded";
    parent.appendChild(p);
}

document.getElementById("clear-history-btn").addEventListener("click",function(){
    let clearHistoryBtn = document.getElementById("parent-history");
    clearHistoryBtn.innerHTML = "";
})

// 

document.getElementById("btn-complete-1").addEventListener("click", function() {
    
    disableButton("btn-complete-1");
    taskAssigned ("task-assigned");
    
    appendTaskHistory("parent-history", "you have completed the task Fix Mobile Issue at 12:48:15 PM");
    taskCompleted("increase-number");
    
    
});
document.getElementById("btn-complete-2").addEventListener("click", function() {
    disableButton("btn-complete-2");
    taskAssigned ("task-assigned");
    appendTaskHistory("parent-history", "you have completed the task Add Dark Mode at 12:48:15 PM");
    taskCompleted("increase-number");
    
});
document.getElementById("btn-complete-3").addEventListener("click", function() {
    disableButton("btn-complete-3");
    taskAssigned ("task-assigned");
    appendTaskHistory("parent-history", "you have completed the task Optimize Home Page at 12:48:15 PM");
    taskCompleted("increase-number");
    
});
document.getElementById("btn-complete-4").addEventListener("click", function() {
    disableButton("btn-complete-4");
    taskAssigned ("task-assigned");
    appendTaskHistory("parent-history", "you have completed the task Add new emoji at 12:48:15 PM");
    taskCompleted("increase-number");

});
document.getElementById("btn-complete-5").addEventListener("click", function() {
    disableButton("btn-complete-5");
    taskAssigned ("task-assigned");
    appendTaskHistory("parent-history", "you have completed the Integrate OpenAI API at 12:48:15 PM");
    taskCompleted("increase-number");
    
});
document.getElementById("btn-complete-6").addEventListener("click", function() {
    disableButton("btn-complete-6");
    taskAssigned ("task-assigned");

    appendTaskHistory("parent-history", "you have completed the task  Improve Job Searching at 12:48:15 PM");
    
    taskCompleted("increase-number");
});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("change-bg-color").addEventListener("click", function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});
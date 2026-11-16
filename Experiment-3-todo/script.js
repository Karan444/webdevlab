function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task == "") {
        alert("Please enter a task");
    }
    else {
        var li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = task +
            ' <button class="btn btn-danger btn-sm float-end" onclick="this.parentElement.remove()">Delete</button>';

        document.getElementById("taskList").appendChild(li);

        input.value = "";
    }
}
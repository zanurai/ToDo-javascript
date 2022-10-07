window.addEventListener("load", () => {
    const form = document.querySelector("#New-Task-2");
    const input = document.querySelector("#new-task");
    const list = document.querySelector("#tasks");


    console.log(form)

    form.addEventListener("submit", (w) => {
        w.preventDefault();

        console.log("form submit");


        const task = input.value;
        if (!task) {
            alert("please  fill the task")
            return;
        } /*else {
            console.log("success");
        }*/

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        //task_content_el.innerText = task;

        task_el.appendChild(task_content_el);


        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("action");


        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");

        task_edit_el.innerHTML = "Edit";


        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");


        task_delete_el.innerHTML = "Delete";


        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        task_el.appendChild(task_action_el);
        list.appendChild(task_el);

        input.value = " ";
        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() == 'edit') {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "save";
            } else {
                task_edit_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "save";
            }
        });

        task_delete_el.addEventListener("click", () => {
            list.removeChild(task_el);

        });

    })
})
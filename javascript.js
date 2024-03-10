document.addEventListener("DOMContentLoaded", function() {
    const list_task = document.getElementById('list-task');
    let tasksHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        tasksHTML += `
            <div class="flex items-start py-2 pb-6 border-b-2">
                <input type="checkbox" class="mt-1 form-checkbox w-[16px] h-[16px]">
                <div class="ms-3">
                    <label for="link-checkbox" class="text-base ">${task.title}</label>
                    <p class="text-[#8f9eb4] mt-1">${task.description}</p>
                </div>
            </div>
        `;
    }

    list_task.innerHTML = tasksHTML;
});
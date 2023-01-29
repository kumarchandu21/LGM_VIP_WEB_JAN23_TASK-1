document.querySelector('#submit').onclick = 
function(){ 

    if(document.querySelector('#new_task input').value.length == 0)
    {
    }
    else{
        document.querySelector('.all_tasks').innerHTML +=`<div id="task"> <span class="taskname">
        ${document.querySelector('#new_task input').value}</span>
        <button id="delete">X</button></div> `;
        var present_tasks = document.querySelectorAll('#delete');
        for(var i = 0; i < present_tasks.length; i++) {
            present_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".taskname");
        for(var i=0; i< tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#new_task input').value="";
    }
}

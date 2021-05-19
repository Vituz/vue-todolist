const app = new Vue({

    el: '#app',

    data:{

        task: '',

        compTask: '',

        completeTasks:[],

        tasksList: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ],
    },

    methods:{
        addTask(){
            if(this.task.length == 0){
                alert('Empty task not accepted')
            } else {
                this.tasksList.unshift(this.task);
                this.task = '';
            }
        },

        deleteTask(index){
            this.tasksList.splice(index, 1);
            // alert(`Task n. ${index + 1} removed!`); togliere il commento
        },

        addCompleteTasks(index){
            // this.savedTasks.unshift(this.task);
            let removeTask = this.tasksList.splice(index, 1);
            // this.completeTasks.unshift(removeTask[0]);
            this.completeTasks.unshift(removeTask[0]);
        },

        modTask(index){
            console.log(this.compTask);
            this.tasksList.unshift(this.compTask);
            this.tasksList.splice(index +1, 1);
        },

        replace(index){
            // this.savedTasks.unshift(this.task);
            let removeTask = this.completeTasks.splice(index, 1);
            // this.completeTasks.unshift(removeTask[0]);
            this.tasksList.unshift(removeTask[0]);

        }
    }
});
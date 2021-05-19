const app = new Vue({

    el: '#app',

    data:{

        task: '',

        compTask: '',

        trashTAsk: '',

        tasksList: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ],

        completeTasks:[],

        trashTasks: []
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
            let trash = this.tasksList.splice(index, 1);
            this.trashTasks.unshift(trash[0])
            console.log(this.trashTasks);
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
            let removeTask = this.completeTasks.splice(index, 1);
            this.tasksList.unshift(removeTask[0]);
        },

        replaceTrash(index){
            let removeTask = this.trashTasks.splice(index, 1);
            this.tasksList.unshift(removeTask[0]);
        },

        deleteAll(){
            const confirm = prompt("Are you sure you want to permanently delete all notes? Y/N");
            console.log(confirm);
            if(confirm === 'Y' || confirm === 'y'){
                alert(`${this.trashTasks.length} tasks deleted!`)
                this.trashTasks = [];
            }
        }
    }
});
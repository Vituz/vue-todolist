const app = new Vue({

    el: '#app',

    data:{

        task: '',

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
        },

    }
});
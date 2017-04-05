app.factory("Model",function(){
function Model(todoTask){
        this.todoTask = todoTask;
        this.isCompleted=false;

    }
    Model.prototype.toggle=function(){
        this.isCompleted = !this.isCompleted;
    }
    return Model;
})

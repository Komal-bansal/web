app.controller("todoctrl",function($scope,Model){
    $scope.taskObject={
      taskList:[],
      
      addTask:function(){
        var newtask= new Model($scope.todoTask);
          console.log(newtask);
//          $scope.todoTask.focus();
          $scope.todoTask="";
        return this.taskList.push(newtask);
          
    },
    
    removeCompletedTask:function(){
        this.taskList= this.taskList.filter(function(x){
            return !x.isCompleted;
        });
    },
    
    countCompleted:function(){
        return this.taskList.filter(function(x){
            return x.isCompleted;
        }).length;
    },
        
countPending:function(){
        return this.taskList.filter(function(x){
            return !x.isCompleted;
        }).length;
    }
    };
})



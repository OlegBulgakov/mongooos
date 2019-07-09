const TaskController = require('../controllers/task.controller');

module.exports = function (app) {
    app.get('/test', TaskController.getAll)
    app.post('/test', TaskController.postTask)
    app.delete('/test/:id', TaskController.deleteTask)
    app.delete('/test', TaskController.deleteClearCompleted)
    app.put('/test', TaskController.checkbox)
    app.put('/test', TaskController.changeData)
    app.put('/test/setAll', TaskController.checkAll)
}
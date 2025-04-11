const { createTask, updateTaskById, fetchAllTasks, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('All task')
})

router.post('/',fetchAllTasks) 

router.post('/',createTask) 

router.post('/',updateTaskById) 

router.post('/',deleteTaskById) 

module.exports = router;
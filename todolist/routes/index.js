const express = require('express');
const router = express.Router();
const homeController =  require('../controllers/homecontroller');

router.get('/',homeController.home);
router.post('/create_todo',homeController.createTodo) //controller for creating todo list
router.post('/delete_todo',homeController.deleteTodo) //controller for deleting the todo list
router.get('/editdata',homeController.editPage);//controller for getting edit page
router.post('/edit-todolist',homeController.editDetails) //controller for editing todolist


console.log('Router loaded successfully');
module.exports = router; 
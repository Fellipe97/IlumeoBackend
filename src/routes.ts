import express from "express";
import functionsApi from './controller/FunctionsController';


const FunctionsController = functionsApi();
const router = express.Router()




router.get('/', FunctionsController.teste)
router.post('/signin', FunctionsController.login)
router.post('/startPoint', FunctionsController.startPoint)
router.post('/endPoint', FunctionsController.endPoint)


export default router;
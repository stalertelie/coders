const express=require('express');

const router=express.Router();

//controllers import
const Controller=require('../../controllers/Controllers');


//middleware import
const General=require('./../middleware/general');
const veriftoken=require('./../middleware/verifyToken');

//app install test route
router.get('/',Controller.testController);

router.get('/test/user',veriftoken.verifyTokken,Controller.userController);

//get token
router.get('/api_v1/tokken',Controller.generateToken);

//user routes
router.post('/api_v1/create_user',veriftoken.verifyTokken,Controller.createUser);
router.post('/api_v1/user/login',veriftoken.verifyTokken,General.userValidator,Controller.userLogin);
router.post('/api_v1/user/logout',veriftoken.verifyTokken,General.userValidator2,Controller.userLogout);
router.post('/api_v1/user/update',veriftoken.verifyTokken,General.userValidator2,Controller.userUpdate);

//transaction management mtn
router.post('/api_v1/init_transaction/mtn_mtn',veriftoken.verifyTokken,Controller.transactionTest);
router.post('/api_v1/init_transaction/mtn_orange',veriftoken.verifyTokken,Controller.transactionTest);
router.post('/api_v1/init_transaction/mtn_moov',veriftoken.verifyTokken,Controller.transactionTest);

//transaction management orange
router.post('/api_v1/init_transaction/orange_orange',veriftoken.verifyTokken,Controller.transactionTest);
router.post('/api_v1/init_transaction/orange_mtn',veriftoken.verifyTokken,Controller.transactionTest);
router.post('/api_v1/init_transaction/orange_moov',veriftoken.verifyTokken,Controller.transactionTest);

//transaction management moov
router.post('/api_v1/init_transaction/moov_moov',veriftoken.verifyTokken,Controller.transactionTest);
router.post('/api_v1/init_transaction/moov_orange',veriftoken.verifyTokken,Controller.transactionTest);
router.post('/api_v1/init_transaction/moov_mtn',veriftoken.verifyTokken,Controller.transactionTest);

//call back routes
//MTN callback
router.all('/api_v1/mtnCallback',Controller.mtnCallBack);





module.exports=router;


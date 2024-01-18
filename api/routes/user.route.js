import express from 'express';
import {test, updateUser,deleteUser} from '../controllers/user.controller.js'
// import { verify } from 'jsonwebtoken';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

// router.get('/', (req, res) => {
//     res.json({
//         message: 'API is working',
//     });
// }
// );

export default router;
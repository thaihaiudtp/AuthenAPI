import express from 'express'
import sequelize from './config/db/dbConnect.js';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './router/router.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
//Kết nối database
try {
    await sequelize.sync({force: false}); //để true khi reset sẽ bị xóa dữ liệu ở bảng 
    console.log("Đồng bộ thành công");
} catch (error) {
    confirm.log(error.message);
}
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    credentials: true
}));
route(app);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`))





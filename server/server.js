const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const departmentRoutes = require('./api/departments');
const employeeRoutes = require('./api/employees');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

// Подключение к MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log('Подключение к MongoDB успешно!');
  })
  .catch((error) => {
    console.error('Ошибка подключения к MongoDB:', error);
  });

// Используем маршруты
app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

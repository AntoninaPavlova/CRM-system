const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Department = require('./models/Department');
const Staff = require('./models/Staff');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/companyDB';

// Подключение к MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log('Подключение к MongoDB успешно!');
  })
  .catch((error) => {
    console.error('Ошибка подключения к MongoDB:', error);
  });

// API для отделов
app.get('/api/departments', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении отделов', error });
  }
});

// API для сотрудников
app.get('/api/staff', async (req, res) => {
  try {
    const staff = await Staff.find().populate('departmentId');
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении сотрудников', error });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

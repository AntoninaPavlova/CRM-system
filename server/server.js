const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const Department = require('./models/Department');
const Staff = require('./models/Staff');

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

// API для удаления отдела
app.delete('/api/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Department.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении отдела', error });
  }
});

// API для обновления отдела
app.put('/api/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDepartment = req.body; // Получаем данные из тела запроса
    const department = await Department.findByIdAndUpdate(id, updatedDepartment, { new: true });
    if (!department) {
      return res.status(404).json({ message: 'Департамент не найден' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при обновлении отдела', error });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const Department = require('./models/Department');
const Employee = require('./models/Employee');

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const PORT = process.env.MONGODB_URI || 5000;

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

// API для получения отдела по id
app.get('/api/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: 'Отдел не найден' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении отдела', error });
  }
});

// API для сотрудников
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении сотрудников', error });
  }
});

// API для получения сотрудника по id
app.get('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Сотрудник не найден' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении сотрудника', error });
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

// API для удаления сотрудника
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении сотрудника', error });
  }
});

// API для обновления отдела
app.put('/api/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDepartment = req.body;
    const department = await Department.findByIdAndUpdate(id, updatedDepartment, { new: true });
    if (!department) {
      return res.status(404).json({ message: 'Департамент не найден' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при обновлении отдела', error });
  }
});

// API для обновления сотрудника
app.put('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = req.body;
    const employee = await Employee.findByIdAndUpdate(id, updatedEmployee, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Сотрудник не найден' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при обновлении сотрудника', error });
  }
});

// API для создания нового отдела
app.post('/api/departments', async (req, res) => {
  try {
    const newDepartment = new Department(req.body);
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при создании нового отдела', error });
  }
});

// API для создания нового сотрудника
app.post('/api/employees', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при создании нового сотрудника', error });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

// Получение всех сотрудников
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении сотрудников', error });
  }
});

// Получение сотрудника по id
router.get('/:id', async (req, res) => {
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

// Создание нового отдела
router.post('/', async (req, res) => {
    try {
      const newEmployee = new Employee(req.body);
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при создании нового сотрудника', error });
    }
  });

// Обновление сотрудника
router.put('/:id', async (req, res) => {
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

// Удаление сотрудника
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении сотрудника', error });
  }
});

module.exports = router;

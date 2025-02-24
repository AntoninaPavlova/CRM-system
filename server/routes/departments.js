const express = require('express');
const Department = require('../models/Department');

const router = express.Router();

// Получение всех отделов
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении отделов', error });
  }
});

// Получение отдела по id
router.get('/:id', async (req, res) => {
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

// Создание нового отдела
router.post('/', async (req, res) => {
  try {
    const newDepartment = new Department(req.body);
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при создании нового отдела', error });
  }
});

// Обновление отдела
router.put('/:id', async (req, res) => {
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

// Удаление отдела
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Department.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении отдела', error });
  }
});

module.exports = router;

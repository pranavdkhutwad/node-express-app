const express = require('express');
const router = express.Router();
const fs = require('fs');
const students = [
    {
        "id": 1,
        "name": "Sheetal"
    },
    {
        "id": 2,
        "name": "Shruti"
    }
];

router.get('/', (req, res) => {
   res.send(students);
});
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).send('Not found');
    }

    return res.send(student);
});
router.post('/', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name
    }
    students.push(student);
    res.send(student);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((student) => student.id === id);

    if (index === -1) {
        return res.status(404).send('Not found');
    }

    students.splice(index, 1);
    return res.send({ id });
});

module.exports = router;

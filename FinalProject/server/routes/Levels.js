import {_createLevel, _updateLevel, _getLevel, _delLevel, _getAllLevels } from '../controllers/Levels.js';
import express from 'express';
import multer from 'multer'
import path from 'path'

var storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, './uploads')
    },
    filename : function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname)
        cb(null, fileName);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

export const level_router = express.Router();

level_router.get('/:id', _getLevel);
level_router.post('/', upload.single('file'), _createLevel);
level_router.put('/', upload.single('file'), _updateLevel);
level_router.delete('/', _delLevel);
level_router.get('/', _getAllLevels)
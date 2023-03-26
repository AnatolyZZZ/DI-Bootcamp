import {_createLevel, _updateLevel, _getLevel, _delLevel, _getAllLevels } from '../controllers/Levels.js';
import express from 'express';

export const level_router = express.Router();

level_router.get('/:id', _getLevel);
level_router.post('/', _createLevel);
level_router.put('/', _updateLevel);
level_router.delete('/', _delLevel);
level_router.get('/', _getAllLevels)
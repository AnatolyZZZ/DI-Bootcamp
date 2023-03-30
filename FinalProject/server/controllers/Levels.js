import {createLevel, updateLevel, deleteLevel, getLevel, getAllLevels} from '../modules/Levels.js'

export const _createLevel = async (req, res) => {
    try {
        // console.log(typeof(req.body.photos));
        // console.log(req.body.photos);
        console.log('req.body =>',req.body.id, req.body.description);
        console.log('req.body =>',req.body);
        // req.body.photos = JSON.stringify(req.body.photos);
        const id = await createLevel(req.body)
        res.status(200).json(id)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Creating level failed"})
    }  
}

export const _getLevel = async (req, res) => {
    try {
        const level = await getLevel(req.params.id)
        // console.log(typeof(level[0].photos));
        // console.log(level[0].photos);
        res.status(200).json(level)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Level doesn't exist"})
    }  
}
export const _delLevel = async (req, res) => {
    try {
        const level = await deleteLevel(req.body.id)
        res.status(200).json({msg : "Deleted successfuly"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Level doesn't exist"})
    }  
}

export const _updateLevel = async (req, res) => {
    try {
        console.log('req.body answers=>',req.body.answers);
        console.log('req.body =>',req.body);
        const level = await updateLevel({...req.body, photo : req.file ? req.file.filename : ""})
        res.status(200).json(level)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Updating level failed"})
    }  
}

export const _getAllLevels = async (req, res) => {
    const allLevels = await getAllLevels();
    res.status(200).json(allLevels)
}
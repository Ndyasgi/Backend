import Trip from "../model/TripModel.js";

export const getTrip = async (req, res) => {
    try{
        const response = await Trip.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTripById = async(req, res) => {
    try{
        const response = await Trip.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTrip = async (req, res) => {
    try{
        await Trip.create(req.body);
        res.status(201).json({ msg : "Trip Create"});
    }catch (error){
        console.log(erros.message);
    }
}

export const updateTrip = async(req, res) => {
    try{
        const response = await Trip.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Trip Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTrip = async(req, res) => {
    try{
        await Trip.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Trip Update"});
    } catch (error) {
        console.log(error.message);
    }
}
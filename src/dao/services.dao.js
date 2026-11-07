import { ServiceModel } from "../models/services.model.js";

export class ServicesDAO {

    async getAll() {
        const services = await ServiceModel.find().lean();
        return services
    }

    async getById(id){
        const service = await ServiceModel.findById(id);
        return service
    }

    async create(data){
        const newService = await ServiceModel.create(data);
        return newService;
    }

    async update(id, data){
        const updatedBooking = await ServiceModel.findByIdAndUpdate(id, data, {new: true});
        return updatedBooking
    }

    async delete(id){
        const deletedService = await ServiceModel.findByIdAndDelete(id);
        console.log(deletedService)
        return deletedService
    }
}
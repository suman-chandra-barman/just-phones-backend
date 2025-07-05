import { Request, Response } from "express";
import { PhoneServices } from "./phone.service";

const getAllPhones =  async (req: Request, res: Response) => {
    try {
        const result = await PhoneServices.getAllPhonesFromDB();
        res.status(200).json({
            success: true,
            message: 'Phones retrieved successfully',
            data: result,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
        
    }
 
};

const getSinglePhone = async(req: Request, res: Response) => {
 try {
        const id = req.params.id;
        const result = await PhoneServices.getSinglePhoneFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Phone retrieved successfully',
            data: result,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
        
    }
};

export const PhoneController = {
  getAllPhones,
  getSinglePhone
};

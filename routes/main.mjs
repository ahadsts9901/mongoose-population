import express from "express"
import "../mongodb.mjs"
import { staffModel } from "../models/staff.mjs"
import { rightsModel } from "../models/rights.mjs"
const router = express.Router()

// create staff
router.post("/staff", async (req, res) => {

    const { name, email } = req.body

    try {
        const response = await staffModel.create({
            name: name,
            email: email
        })

        res.send({
            message: "staff created successfully",
        })
    } catch (error) {
        console.log(error);
        res.send({
            message: "error creating staff"
        })
    }

})

// create right
router.post("/right", async (req, res) => {

    const { staffId, right } = req.body

    const response = await rightsModel.create({
        staffId: staffId,
        right: right
    })

    res.send({
        message: "right created successfully",
    })

})

// get staff data according to right ( actual population )
router.get("/right", async (req, res) => {

    const { staffId } = req.body

    const response = await rightsModel.find({ staffId: staffId }).populate("staffId")

    res.send({
        message: "right fetched successfully",
        data: response
    })

})

export default router
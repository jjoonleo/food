exports.tryCatch = (controller) => async (req, res, next) => {
    try {
        await controller(req,res);
    } catch (error) {
        return res.status(400).json({success:false});
    }
};
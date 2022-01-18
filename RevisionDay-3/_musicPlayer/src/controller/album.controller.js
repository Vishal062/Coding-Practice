const express = require("express");

const router = express.Router();

const Albums = require("../model/album.model");

//Path or get method or end Point
router.get("",async (req,res) => {
    const page = +req.query.page;
    const size = +req.query.limit;
    const formula = (page-1)*size;

    let albumName = await Albums.find().skip().limit(size).lean().exec();
    res.status(200).send({albumName});
    
});

router.post("",async(req,res) => {
    let albumName = await Albums.create(req.body);
    res.status(201).send({albumName});
});

module.exports = router;
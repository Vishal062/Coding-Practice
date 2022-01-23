router.get("/", async (req, res) => {

    try {
      const page = req.query.page ||1
      const size = req.query.size  ||3
  
      const totalUserCount = await User.find().countDocuments().lean().exec();
      const totalPages = Math.ceil(totalUserCount / size);
      const skipping = (page - 1) * size;
  
      
      const user = await User.find().skip(skipping).limit(size).lean().exec();
      return res.status(200).send({user,totalPages})
    } catch (err) {
       console.log(err.message);
      return res.status(400).send(err.message);
     
    }
  });
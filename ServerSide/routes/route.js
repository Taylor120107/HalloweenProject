const router = require(`express`).Router();

const Halloween = require("../models/schema");
const {halloweenModel} = require ("../models/schema")


router.get(`/halloween`, (req, res) => res.send("Hello,Hello"));

router.get('/', async (req, res, next) => {
    try {
      const halloweenCharacters = await Halloween.find();
      return res.json(halloweenCharacters);
    } catch (err) {
      return next(err);
    }
  });

router.get("/getAll", (req, res) => halloweenModel.find({}).then(results => res.send(results)).catch(err => next(err)));


router.post('/createCharacter', async (req, res, next) => {
    try {
      const newCharacter = await Halloween.create(req.body);
      return res.status(201).json(newCharacter);
    } catch (err) {
      return next(err);
    }
  });
  

router.patch(`/replace/:id`, async (req, res, next) => {
    try {
        await halloweenModel.findByIdAndUpdate(req.params.id, req.query)
        const newName = await halloweenModel.findById(req.params.id);
        res.send(newName);
    } catch (err) {
        return next(err);
    }
});


router.delete(`/delete/:id`, (req, res, next) => {
    const { id } = req.params;
    console.log("ID", id);
    halloweenModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

module.exports = router;
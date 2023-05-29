const express = require("express");
const router = express.Router();
const Recommended = require("../modal/recommended");

router.get("/recommended", (req, res) => {
  Recommended.find((err, recommendeds) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(recommendeds);
    }
  });
});

router.get("/recommended/:id", (req, res) => {
  Recommended.findById(req.params.id, (err, recommended) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the course with id ${req.params.id}.`
        );
    } else {
      res.send(recommended);
    }
  });
});

router.post("/recommended", (req, res) => {
  const { itemName, description, price, imageUrl } = req.body;

  const recommended = new Recommended({
    itemName,
    description,
    price,
    imageUrl,
  });

  recommended.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/recommended", (req, res) => {
  const { itemName, description, price, imageUrl } = req.body;

  Recommended.findByIdAndUpdate(
    req.params.id,
    {
      itemName,
      description,
      price,
      imageUrl,
    },
    (err, recommended) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(
            `An error occurred while updating the product with id ${req.params.id}.`
          );
      } else {
        res.send("Product updated successfully.");
      }
    }
  );
});

router.delete("/recommended/:id", (req, res) => {
  Recommended.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while deleting the product with id ${req.params.id}.`
        );
    } else {
      res.send("Product deleted successfully.");
    }
  });
});

module.exports = router;

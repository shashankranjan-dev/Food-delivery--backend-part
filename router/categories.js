const express = require("express");
const router = express.Router();
const Categories = require("../modal/categories");

router.get("/categories", (req, res) => {
  Categories.find((err, categories) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(categories);
    }
  });
});

router.get("/categories/:id", (req, res) => {
  Categories.findById(req.params.id, (err, categories) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the categories with id ${req.params.id}.`
        );
    } else {
      res.send(categories);
    }
  });
});

router.post("/categories", (req, res) => {
  const { categoryName, description, imageUrl } = req.body;

  const categories = new Categories({
    categoryName,

    description,

    imageUrl,
  });

  categories.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/categories", (req, res) => {
  const { categoriesName, description, imageUrl } = req.body;

  Categories.findByIdAndUpdate(
    req.params.id,
    {
      categoriesName,

      description,

      imageUrl,
    },
    (err, categories) => {
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

// router.delete("/categories/:id", (req, res) => {
//   Course.findByIdAndDelete(req.params.id, (err) => {
//     if (err) {
//       console.log(err);
//       res
//         .status(500)
//         .send(
//           `An error occurred while deleting the product with id ${req.params.id}.`
//         );
//     } else {
//       res.send("Product deleted successfully.");
//     }
//   });
// });

module.exports = router;

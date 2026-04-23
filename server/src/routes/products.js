const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "Cheess",
      price: 4.44
    },
    {
      id: 2,
      name: "Dip",
      price: 1.1
    },
    {
      id: 3,
      name: "Bun",
      price: 0.2
    }
  ];
  
  res.status(200).json(products);
});

module.exports = router;
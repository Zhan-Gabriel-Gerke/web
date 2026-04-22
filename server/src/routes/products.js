const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "Cheess",
    },
    {
      id: 2,
      name: "Dip"
    },
    {
      id: 3,
      name: "Bun"
    }
  ];
  
  res.status(200).json(products);
});

module.exports = router;
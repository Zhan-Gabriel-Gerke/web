const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /dates:
 *   get:
 *     summary: Get list of dates
 *     description: Returns a list of dates with descriptions
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   date:
 *                     type: string
 *                     format: date
 *                   description:
 *                     type: string
 *               example:
 *                 - id: 1
 *                   date: "2026-04-21"
 *                   description: "Today"
 *                 - id: 2
 *                   date: "2026-12-25"
 *                   description: "Christmas 2026"
 */
router.get('/dates', (req, res) => {
  const dates = [
    {
      id: 1,
      date: '2026-04-21',
      description: 'AAAAA',
    },
    {
      id: 2,
      date: '2026-05-01',
      description: 'Spring Break End',
    },
    {
      id: 3,
      date: '2026-06-21',
      description: 'Summer Solstice',
    },
    {
      id: 4,
      date: '2026-12-25',
      description: 'Christmas 2026',
    },
    {
      id: 5,
      date: '2027-01-01',
      description: 'New Year 2027',
    },
    {
      id: 6,
      data: '2026-04-22',
      description: 'Hello from Mcdonals'
    }
  ];

  res.status(200).json(dates);
});

module.exports = router;
const getTotalSales = async (req, res) => {
    try {
      const orders = await mongoose.connection.db.collection('shopifyOrders');
  
      const salesData = await orders.aggregate([
        {
          $group: {
            _id: {
              year: { $year: "$created_at" },
              month: { $month: "$created_at" },
              day: { $dayOfMonth: "$created_at" },
            },
            totalSales: { $sum: "$total_price_set.shop_money.amount" }
          }
        },
        { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }
      ]).toArray();
  
      res.json(salesData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
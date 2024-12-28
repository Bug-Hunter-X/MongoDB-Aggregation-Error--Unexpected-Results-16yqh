```javascript
// Assuming 'users' is your collection
db.users.aggregate([
  {
    $match: {
      age: {
        $gt: 25
      }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
]);
```
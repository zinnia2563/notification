const asyncHandler = require("express-async-handler");
const Transaction = require("../Model/Transaction");

const saveTransaction = asyncHandler(async (req, res) => {
  const {
    accounttype,
    transactiontype,
    clientname,
    clientmobile,
    clientamount,
    duedate,
    currentdate,
  } = req.body;
  const transaction = new Transaction({
    accounttype,
    transactiontype,
    clientname,
    clientmobile,
    clientamount,
    duedate,
    currentdate,
    duedate,
  });

  try {
    const result = await transaction.save();
    res.json({
      message: "created successfully",
      body: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});

const notification = asyncHandler(async(req,res) =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    console.log(today);
    try {
        const dates = await Transaction.find({},{duedate:1});
        let result = dates.some(obj => obj.duedate === today);
        console.log(result);
        if(result){
            const transaction = await Transaction.find({"duedate": today})
            res.json({
                message: "Hello you have a notification",
                data: transaction
            })
        }
        else{
            res.json({
                message: "you don't have any notification",
                data: []
            })
        }
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = {
  saveTransaction,
  notification,
};

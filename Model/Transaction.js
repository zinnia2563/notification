const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
    {
        accounttype: {
            type: String
        },
        transactiontype:{
            type: String
        },
        clientname: {
            type: String,
        },
        clientmobile: {
            type: String,
        },
        clientamount: {
            type: String,
        },
        duedate:{
            type: String,
        },
        currentdate: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;

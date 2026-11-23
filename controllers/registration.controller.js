const pool = require("../connection/db.connect");

const handleRegisterCustomer = (req, res) => {
    const {fullName, userEmail, phone, guestsCount, eventCategory, eventTitle, eventDateTime} = req.body;
    if(!fullName || !userEmail || !phone || !guestsCount) {
        return res.status(400).json({ message : "All fields are required" });
    }

    try {
        const sql = "INSERT INTO registrations (fullName, userEmail, phone, guestsCount, eventCategory, eventTitle, eventDateTime) VALUES (?, ?, ?, ?, ?, ?, ?)";
        pool.query(sql, [fullName, userEmail, phone, guestsCount, eventCategory, eventTitle, eventDateTime], (err, result) => {
            if(err) {
                return res.status(500).json({ message: `Something went wrong : ${err.message}` })
            } 
             else {
                return res.status(201).json({ message: `You are Successfully Registered at ID : ${result.insertId}` })
            }
        })
    }
     catch (error) {
        return res.status(500).json({ message : `Internal Server Error : ${error.message}` });
    }
}

const handleGetRegistrations = (req, res) => {
    try {
        const sql = "SELECT * FROM registrations";
        pool.query(sql, (err, result) => {
            if(err) {
                return res.status(400).json({ message : `Something went wrong : ${err.message}` });
            }
            else if(result.affectedRows === 0) {
                return res.status(404).json({ message : "No Registration Found" });
            } 
            else {
                return res.status(200).json({ data : result });
            }

        })
    }
     catch (error) {
        return res.status(500).json({ message : `Internal Server Error: ${error.message}` });
    }
}

const handleDeleteRegistration = (req, res) => {
    const {id} = req.params;
    
    try {
        const sql = "DELETE FROM registrations WHERE id = ?";
        pool.query(sql, [id], (err, result)  => {
            if(err) {
                return res.status(400).json({ message : `Deletion Failed : ${err.message}` })
            }
            else {
                return res.status(200).json({ message: "Registration is Deleted successfully" });
            }
        })
    }
     catch (error) {
        return res.status(500).json({ message: `Internal Server Error : ${error.message}` });
    }
}

module.exports = { handleRegisterCustomer, handleGetRegistrations, handleDeleteRegistration }
// const pool = require("../connection/db.connect");

const handleAddEvent = async (req, res) => {
    // const { title, description, dateTime, location, category, contact_email } = req.body;

    // if(!title || !description || ! dateTime || !location || !category || !contact_email) {
    //     return res.status(400).json({ message : "All fields are required" });
    // }

    // const match = category.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s?(.*)$/u);

    // const category_emojie = match ? match[1] : '';
    // const category_name = match ? match[2] : '';

    // try {
    //     const sql = "INSERT INTO events (title, contact_email, location, category_name, category_emojie, dateTime, description) VALUES (?, ?, ?, ?, ?, ?, ?)";
    //     pool.query(sql, [title, contact_email, location, category_name, category_emojie, dateTime, description], (err, result) => {
    //         if(err) {
    //             return res.status(400).json({ message : `Error in submitting : ${err}` });
    //         } 
    //         else {
    //             return res.status(201).json({ message : `Event Added successfully Done at ID : ${result.insertId}` });
    //         }
    //     })
    // }
    //  catch (error) {
    //     return req.status(500).json({ message : "Internal server error" });
    // }

    console.log("run")
}

const handleShowEvents = (req, res) => {
    // try {
    //     const sql = "SELECT * FROM events";
    //     pool.query(sql, (err, result) => {
    //         if(err) {
    //             return res.status(400).json({ message : `Something went wrong : ${err}` })
    //         }
    //         else if(result.affectedRows === 0) {
    //             return res.status(404).json({ message : "No Event Found" });
    //         }
    //         else {
    //             return res.status(200).json({ data : result });
    //         }
    //     })
    // }
    //  catch (error) {
    //     return res.status(500).json({ message : "Internal Server Error" });
    // }
      console.log("run")
}

const handleDeleteEvent = (req, res) => {
    // const {id} = req.params;

    // try {
    //     const sql = "DELETE FROM events WHERE id = ?";
    //     pool.query(sql, [id], (err, result) => {
    //         if(err) {
    //             return res.status(400).json({ message: `Something went wrong : ${err.message}` })
    //         }
    //         else {
    //             return res.status(200).json({ message: `Event Deleted successfully` });
    //         }
    //     })
    // }
    //  catch (error) {
    //     return res.status(500).json({ message : `Internal Server Error : ${error.message}` });
    // }

      console.log("run")
}

const handleEditEventDetails = (req, res) => {
    // let { title, description, dateTime, category, location, contact_email } = req.body;
    // const { id } = req.params;

    // if(!id) {
    //     return res.status(400).json({ message: "ID is required"});
    // }

    // const match = category.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s?(.*)$/u);
    // const category_emojie = match ? match[1] : '';
    // const category_name = match ? match[2] : '';

    // let fields = [];
    // let values = [];

    // if(title) {
    //     fields.push("title = ?");
    //     values.push(title);
    // }
    // if(contact_email) {
    //     fields.push("contact_email = ?");
    //     values.push(contact_email);
    // }
    // if(location) {
    //     fields.push("location = ?");
    //     values.push(location);
    // }
    // if(dateTime) {
    //     fields.push("dateTime = ?");
    //     values.push(dateTime);
    // }
    // if(category_name) {
    //     fields.push("category_name = ?");
    //     values.push(category_name);
    // }
    // if(category_emojie) {
    //     fields.push("category_emojie = ?");
    //     values.push(category_emojie);
    // }
    // if (description !== undefined) {
    //     fields.push("description = ?");
    //     values.push(description || "-");
    // }

    // if(fields.length === 0) {
    //     return res.status(400).json("No data provided to update");
    // }

    // const sql = `UPDATE events SET ${fields.join(", ")} WHERE id = ?`;
    // values.push(id);

    // pool.query(sql, [...values], (err, result) => {
    //     if(err) {
    //         res.status(500).json({ message : `Error in Updating data : ${err.message}`});
    //     }

    //     if(result.affectedRows === 0) {
    //         return res.status(404).json({ message : "Reservation not found" });
    //     }

    //     return res.status(201).json({ message : "Reservation is Updated Successfully" });
    // })

      console.log("run")
}

module.exports = { handleAddEvent, handleShowEvents, handleDeleteEvent, handleEditEventDetails }
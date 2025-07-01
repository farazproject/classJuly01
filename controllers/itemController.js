const Item = require('../models/itemModel');

// Function to create a new item
exports.createNewItem = async(req, res) => {

    // res.status(200).json({ message: "Item creation endpoint" });
    

    try {
        const { name, price, quantity } = req.body;
        console.log("Request body:", req.body);
        if (!name || !price || !quantity) {
            return res.status(400).json({ error: 'All fields are required' });
        }
    


    const newItem = new Item({
        name,
        price,
        quantity
    });

    await newItem.save();
    res.status(201).json({messge : "Item created successfully", item: newItem});
    }
    catch(err){
        res.status(400).json({ error: 'Internal server error', item: newItem });
    }

    
}

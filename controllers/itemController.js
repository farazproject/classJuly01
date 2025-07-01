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


exports.deleteItem = async(req, res) => {
    

    try {
        const itemId = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully', item: deletedItem });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.updateItem = async(req, res) => {
    try{
        const {id} = req.params;
        const { name, price, quantity } = req.body;

        const item = await Item.findById(id);
        if(!item){
            return res.status(404).json({ error: 'Item not found' });
        }
        if(name) item.name = name;
        if(price) item.price = price;
        if(quantity) item.quantity = quantity;

        const updatedItem = await item.save();
        res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
    }


    catch(err){
        res.status(400).json({ error: 'Internal server error' });
    }
}

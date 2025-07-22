const Client = require("../models/Client");

// ===================
// GET CLIENT BY PHONE
// ===================
const getOne = async (req, res) => {
  const { phone } = req.params;
  if (!phone) {
    return res.status(401).json({ message: "all fields are required" });
  }

  const foundClient = await Client.findOne({
    $or: [{ phone: phone }, { phone2: phone }]
  }).lean();
  
  if (!foundClient)
    return res.status(401).json({ message: "Unauthorized" });

  res.json(foundClient); // מחזיר את הלקוח בפועל במקום טקסט
};

// ================
// ADD NEW CLIENT
// ================
const AddClient = async (req, res) => {
  const {phone} = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Please fill the required fields" });
  }

  try {
    const newClient = await Client.create({
      phone
    });

    return res.status(201).json({ message: "New client created", client: newClient });
  } catch (err) {
    return res.status(400).json({ message: "Invalid client", error: err.message });
  }
};

// ======================
// UPDATE CLIENT BY PHONE
// ======================
const updateClient = async (req, res) => {
  const { phone } = req.params;
  const updateData = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
  }
  try {
    const updatedClient = await Client.findOneAndUpdate(
      { $or: [{ phone }, { phone2: phone }] },
      updateData,
      { new: true }
    );

    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ message: "Client updated successfully", client: updatedClient });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
const addDocumentToClient = async (req, res) => {
    const { phone } = req.params;
    const { date, by, des } = req.body;

    if (!date || !by || !des) {
        return res.status(400).json({ message: 'Missing document fields' });
    }

    try {
        const client = await Client.findOne({ $or: [{ phone }, { phone2: phone }] });

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        client.documents.push({ date, by, des });
        await client.save();

        res.status(200).json({ message: 'Document added', client });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
module.exports = { getOne, AddClient, updateClient,addDocumentToClient };

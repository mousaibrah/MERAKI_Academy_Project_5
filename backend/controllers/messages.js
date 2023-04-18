const messageSchema = require("../module/messageSchema");

const getAllMessages = async (req, res) => {
  const connection_id = req.params.id;
  try {
    const result = await messageSchema.findOne({ connection_id });
    res
      .status(200)
      .json({ success: true, message: "Here is all messages", result });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
};
module.exports = { getAllMessages };


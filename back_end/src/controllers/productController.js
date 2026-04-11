import { mobilePro } from "../models/productModels.js";

// 15 mobile data post
export const addProduct = async (req, res) => {
  try {
    const createProducts = await mobilePro.insertMany(req.body);

    res.status(200).json({
      status: true,
      message: "products saved in db",
      data: createProducts,
    });
    console.log("QUERY:", req.query);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `products not saved ${error.message}`,
    });
  }
};

// 15 mobile data searching & shorting

export const searchProducts = async (req, res) => {
  try {
    const { search = "", shortBy = "price", order = "asc" } = req.query;
    // short by price, ram, storage,

    // for searching

    const searchBy = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { price: { $regex: search, $options: "i" } },
        { ram: { $regex: search, $options: "i" } },
        { storage: { $regex: search, $options: "i" } },
      ],
    };

    //for shorting

    const shortOrder = order === "asc" ? 1 : -1;
    const mobile = await mobilePro
      .find(search ? searchBy : {})
      .sort({ [shortBy]: shortOrder });

    //respone

    res.status(200).json({
      status: true,
      result: mobile.length,
      data: mobile,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `product not exist ${error.message}`,
    });
  }
};

//all data update

export const allDataupdate = async (req, res) => {
  try {
    const { id } = req.params;

    const existData = await mobilePro.findById(id);

    if (!existData) {
      return res.status(404).json({
        status: false,
        message: "product not found",
      });
    }

    let ifSame = true;

    for (let key in req.body) {
      if (req.body[key] !== existData[key]) {
        ifSame = false;
        break;
      }
    }

    if (ifSame) {
      return res.status(200).json({
        status: false,
        message: "no change detected",
      });
    }

    const updateProducts = await mobilePro.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateProducts) {
      return res.status(404).json({
        status: false,
        message: "product not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "product update successfully",
      data: updateProducts,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await mobilePro.findById(id);

    if (!products) {
      return res.status(404).json({
        status: false,
        message: "product not found",
      });
    }
    await mobilePro.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "products deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

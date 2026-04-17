import { useEffect, useState } from "react";
import { showProducts } from "../api/productApi.js";

function Products() {
  const [phoneData, setPhoneData] = useState([]);
  useEffect(() => {
    const getMobileData = async () => {
      const data = await showProducts();
      setPhoneData(data.data);
    };
    getMobileData();
  }, []);
  return (
    <div>
      <p> this is a products</p>
      {phoneData.map((items) => (
        <div key={items._id}>
          <p>name:{items.name}</p>
          <p>brand:{items.brand}</p>
          <p>price:{items.price}</p>
          <p>ram:{items.ram}</p>
          <p>storage:{items.storage}</p>
          <p>color:{items.color}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;

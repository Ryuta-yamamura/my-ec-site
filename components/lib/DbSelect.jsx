import { useState, useEffect} from "react";


export default function Test() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
      sqlSelect()
  }, []);


  async function sqlSelect() {
      const response = await fetch(`/api/id`);
      const data = await response.json();
      setProduct(data.queryresult[0]);

  }
  return product;
}
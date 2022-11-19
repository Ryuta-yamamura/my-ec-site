import { useState, useEffect} from "react";


export default function Test() {

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
      sqlSelect()
  }, []);


  async function sqlSelect() {
      const response = await fetch(`/api/select`);
      const data = await response.json();
      setNfts(data.queryresult[0]);

  }
  return nfts;
}
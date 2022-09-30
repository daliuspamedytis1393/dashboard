import axios from "axios";

async function dummyData() {
  const { data } = await axios.get(import.meta.env.VITE_DUMMY_DATA_URL);

  return data.products;
}

export default {
  dummyData,
};

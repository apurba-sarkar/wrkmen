import axios from "axios";
const getData = async () => {
  try {
    const res = await axios.get("https://app.ecwid.com/api/v3/");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

getData();

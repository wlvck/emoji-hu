import axios from "axios";

export default defineEventHandler(async (event) => {
  type emoji = {
    name: string;
    category: string;
    group: string;
    htmlCode: string[];
    unicode: string[];
  };

  const data = await axios
    .get<emoji[]>("https://emojihub.yurace.pro/api/all")
    .then((res) => res.data);
  return {
    data,
  };
});

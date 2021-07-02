import userLoginHistory from "../models/userLoginHistory";

export const insertLoginHist = async (req, res) => {
  const userName = "anonymous";
  const userDevice = "iPhone";

  console.log(userName);

  try {
    const result = await userLoginHistory.create({ userName, userDevice });
  } catch {
    console.log("error");
    res.send("failed");
  }

  res.send("success");
};

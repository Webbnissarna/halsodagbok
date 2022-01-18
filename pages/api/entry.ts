import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  weight?: string;
  wellness?: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    //authenticate
    //send data
    console.log("body: ", req.body);
  }
}

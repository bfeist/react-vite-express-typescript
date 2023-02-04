import express from "express";
import {ROOT_URL} from '../../common/src/constants'
import {validation} from '../../common/src/utils';
import { Request, Response } from "express";
const PORT = 5000,
  app = express();

validation();
  
app.get(ROOT_URL, (req: Request, res: Response) => {
  res.send("hello !!!! ******** ");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));

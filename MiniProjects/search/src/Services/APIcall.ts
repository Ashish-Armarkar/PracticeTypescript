import axios from "axios";
import { Products } from "../Types/DataType";

export const fetchProducts = async (): Promise<Products[]>=>{
const res= await axios.get<Products[]>('../../db.json');
return res.data
}
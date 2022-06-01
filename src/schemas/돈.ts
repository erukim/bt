import { Schema, model } from "mongoose";
interface MoneySchema {
  money: number
  userid: string
  date: string
}
let schema = new Schema<MoneySchema>({
  money: { type: Number },
  userid: { type: String },
  date: { type: String }
})

export default model<MoneySchema>('돈', schema, '돈')
import { people } from '../../../data'

export default async function handler(req, res) {
  console.log(req.body)
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  let data = await fetch(url).then((data) =>  data?.json());

  res.status(200).json(data)
}

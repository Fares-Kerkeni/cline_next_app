import { promises as fs } from "fs";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/api/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

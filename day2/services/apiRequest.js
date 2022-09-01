export async function getDataFromApi() {
  const res = await fetch("http://localhost:3000/tasks");
  const data = await res.json();
  return data;
}

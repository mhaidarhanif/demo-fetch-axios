const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/7f81c3a1-9695-4797-ae79-98485cb46070";

async function getPosts() {
  const response = await fetch(`${BASE_API_URL}/posts`);
  const posts = await response.json();
  console.log(posts);
}

async function addNewPost() {
  const data = {
    title: "Judul cerita",
    story: "Jalannya cerita yang panjang.",
  };

  const response = await fetch(`${BASE_API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newPost = await response.json();

  console.log(newPost);
}

getPosts();

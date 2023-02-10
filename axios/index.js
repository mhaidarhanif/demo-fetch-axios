/**
 * Prompt:
 * create axios example using axios instance with base API URL
 * show the example for GET and POST requests
 * on Node.js
 */

const axios = require("axios");

const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/7f81c3a1-9695-4797-ae79-98485cb46070";

const axiosInstance = axios.create({ baseURL: BASE_API_URL });

async function getPosts() {
  const response = await axiosInstance.get(`/posts`);
  const posts = response.data;
  console.log(posts);
}

async function addNewPost() {
  const response = await axiosInstance.post(`/posts`, {
    title: "Judul cerita 2",
    story: "Jalannya cerita yang lengkap.",
  });
  const newPost = response.data;

  console.log(newPost);
}

addNewPost();

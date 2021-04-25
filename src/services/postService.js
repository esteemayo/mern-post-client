import http from "./httpService";

const apiEndpoint = "/posts";

function postUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPosts() {
  return http.get(apiEndpoint);
}

export function getPost(id) {
  return http.get(postUrl(id));
}

export function getPostWithSlug(slug) {
  return http.get(`${apiEndpoint}/details/${slug}`);
}

export function getLimit(limit) {
  return http.get(postUrl(limit));
}

export function createPost(post) {
  return http.post(apiEndpoint, post);
}

export function updatePost(id, post) {
  return http.patch(postUrl(id), post);
}

export function deletePost(id) {
  return http.delete(postUrl(id));
}

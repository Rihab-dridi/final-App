import axios from 'axios';

const API= axios.create({   baseURL : 'http//:localhost:5000' })



export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);
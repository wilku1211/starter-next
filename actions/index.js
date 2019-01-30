import axios from 'axios';
//jezeli pobieramy dane to .catch nieobsługujemy zrobimy to w componecie,


const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
   timeout: 3000
 });


export const getPortfolios = async () => {
   return await axiosInstance.get('/books').then(response => response.data);
 }

export const getPortfolioById = async (id) => {
   return await axiosInstance.get(`/books/${id}`).then(response => response.data);
 }
export const DelPortfolioById = async (id) => {
   return await axiosInstance.delete(`/books/${id}`).then(response => response.data);
 }


export const postPortfolios = async (x) => {
  const one = x
      /* const one={}
      one.email = headingValues.title,
      one.textarea= text,
      one.color= headingValues.subtitle
      */

   return await axiosInstance.post(`/books`, one).then(response => response.data);
 }

 export const updatePortfolioById = async (x, y) => {
  return await axiosInstance.patch(`/books/${x._id}`,y).then(response => response.data);}
const BASE_URL = "https://e-commerce-yx0j.onrender.com/api/products";

export const showProducts = async () => {
  try {
    const respone = await fetch(`${BASE_URL}`);
    const answer = respone.json();
    console.log(respone);
    console.log(answer);
    return answer;
  } catch (error) {
    console.error("error in productsApi :", error.message);
  }
};

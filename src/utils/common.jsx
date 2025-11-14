export const getRatings = () => {
  return JSON.parse(localStorage.getItem("ratings"));
};

export const updateRatings = (ratings) => {
  localStorage.setItem("ratings", JSON.stringify(ratings));
};

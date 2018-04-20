export const getCats = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(['cinamon', 'mrlopez', 'hellcat', 'thundercat'])}, 2000);
  });
}
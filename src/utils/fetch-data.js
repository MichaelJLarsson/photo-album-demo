const fetchData = async (url, callback) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    callback(json);
  } catch (error) {
    console.warn("Error", error);
  }
};

export default fetchData;

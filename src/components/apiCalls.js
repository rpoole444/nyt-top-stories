const NYT_TOP_STORIES_API_KEY = process.env.REACT_APP_NYT_TOP_STORIES_API_KEY;

export const apiCalls = {
  getArticles(category) {
    return fetch(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${NYT_TOP_STORIES_API_KEY}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return new Error("Trouble Fetching the News");
      }
    });
  },
};

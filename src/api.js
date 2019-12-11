let nextIndex = 0;
let data = [];

export const getData = fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
)
  .then(res => res.json())
  .then(
    (result) => {
      data = result;
      return getMoreData()
    },

    (error) => {
      console.log(error)
      return []
    }
  )

export const getMoreData = () => {
  const newsFeed = []

  for (let i = nextIndex; i < nextIndex + 10; i++) {
    if (!data[i])
      return Promise.reject(new Error('End of feed'))
    newsFeed.push(getNewsItem(data[i]))
  }
  return Promise.all(newsFeed).then(
    result => {
      nextIndex = nextIndex + 10
      return result
    }
  )
}

const getNewsItem = (id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json())
  .then(
    (result) => {
      return result
    },

    (error) => {
      console.log(error)
      return {}
    }
  )
// const Url = ;
const headers = {
  'Content-type': 'application/json'
};

const getDogsData = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds?page=0&limit=9';
  const response = await fetch(url, {
    headers: { 'x-api-key': process.env.API_KEY },
  });
  return response.json();
};

const getLikes = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_ID}/likes`;
  const response = await fetch(url);
  return response.json();
};

const getComments = async (id) => {
  const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_ID}/comments?item_id=${id}`;
  const commentsResponse = await fetch(commentUrl);
  return commentsResponse.json();
};
// getComments(1).then((x) => {
//   console.log(x);
// })


export const postComments = async(breedId, username, comment) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: breedId,
      username,
      comment,
    }),
    headers,
  })
  const response = await request.json();
  return response
};

export { getDogsData, getLikes, getComments };

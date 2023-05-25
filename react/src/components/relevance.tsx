// autoremover for when the war ends

export default async function getRelevance (callback: (relevance: boolean) => void) { 
  // A function to fetch files from github using the api 

  const owner = "JulianWww";
  const repo = "StandWithUkraine"
  
  let data = await fetch (
    `https://api.github.com/repos/${owner}/${repo}/contents/war-still-going-on.json`
  )
    .then (d => d.json ())
    .then (d =>
      fetch (
        `https://api.github.com/repos/${owner}/${repo}/git/blobs/${d.sha}`
      )
    )
    .then (d => d.json ())
    .then (d => JSON.parse (atob (d.content)));
  
  callback(data.value);
}

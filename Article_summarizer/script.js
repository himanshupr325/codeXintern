
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '77b5ce8156msh525d68a805cd76ap1caceejsn2e6c324cac93',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};
const btn = document.querySelector(".btn")
const summary =document.querySelector(".summary")

btn.addEventListener("click", (e) =>{
    e.preventDefault()

    const input = document.querySelector("#url").value
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

    fetch(url,options)
    .then(data => data.json())
    .then(data =>{
        summary.innerText = data?.summary
        // console.log(data)
    })
    .catch(error =>{
        console.log(error)
    })
})
// fetch(url,options)
// .then((data) =>{
//     return data.json()
// })

// .then((data) => {
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
//     }
// )
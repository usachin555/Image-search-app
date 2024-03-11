 const accessKey = "6iIsu45SUgJp9tU7IZefv1WlzsyLHdbQ6lD9_QRDtOs";

 const searchForm = document.getElementById("search-form");
 const searchResult = document.getElementById("search-result");
 const showMoreBtn = document.getElementById("next-page-btn");
 const previousBtn = document.getElementById("previous-page-btn");

 let keyword = "";
 let page = 1;

 async function searchImages(){ 
   searchResult.innerHTML = "";
   const searchBox = document.getElementById("search-box");

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    const results = data.results;
 
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block" ;

    if(page==1){
      previousBtn.style.display = "none";
    }
    else
    {
      previousBtn.style.display = "block";
    }
 }

 searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
 })

 showMoreBtn.addEventListener("click",()=>{
   page++;
   searchImages();
 })

 previousBtn.addEventListener("click",()=>{
   if(page==1){
   return
   }
   page--;
   searchImages();
 })
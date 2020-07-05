 /* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  // const articleSelector = href;//


  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  clickedElement.classList.add('active');
  
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
  }

  /* [IN PROGRESS] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute("href");
  console.log('href:', articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const article = document.querySelector(articleSelector);
  
  /* add class 'active' to the correct article */

  article.classList.add('active');
  
}

const links = document.querySelectorAll('.titles a');
  
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

/* 6.4 */

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  /* remove contents of titleList */
  
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);
      
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    /* get the article id */
    const articleId = article.getAttribute("id");
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* create HTML of the link */
    const linkHTML = '<li><a href="' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
    titleList.insertAdjacentHTML = titleList.insertAdjacentHTML + linkHTML;
  }
}  


generateTitleLinks();
// blog search
const blogSearch = document.querySelector('#blogSearch');
blogSearch.addEventListener("keyup", filterPosts);

function filterPosts() {
  let filterValue = blogSearch.value.toLowerCase();
  const posts = document.querySelectorAll(".card").forEach(post => {
    post.innerText.toLowerCase().indexOf(filterValue)
      > -1 ? post.style.display = '' : post.style.display = 'none';
  })
}
// intersection observer
const header = document.querySelector(".hero");
const mainNav = document.querySelector(".mainNav");

const navObsCallback = (e) => {
  !e[0].isIntersecting ? mainNav.classList.add("applyBackground") : mainNav.classList.remove("applyBackground");
}
const navObsOptions = {}

const navObs = new IntersectionObserver(navObsCallback, navObsOptions);

navObs.observe(header);
// Blogs Data


const blogPosts = [


    {
    title: "My First Post: Building This Portfolio",
    date: "June 15, 2025",
    description: "Welcome to my new little corner of the internet! For my very first post, it felt fitting to talk about the creation of this portfolio website itself...",
    url: "blog-post-1.html"
  },


  // Add more blog post objects here
      {
     title: "Another Blog Title",
     date: "June 1, 2025",
     description: "This is a brief summary of the blog post...",
     url: "blog-post-2.html"
   },


  // Add more blog post objects here
  // {
  //   title: "Another Blog Title",
  //   date: "June 1, 2025",
  //   description: "This is a brief summary of the blog post...",
  //   url: "blog-post-3.html"
  // }
];


// Sort by descending date
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));


// Dynamically insert blog cards
const blogSection = document.getElementById("blog-posts");


if (blogSection) {
  blogPosts.forEach(post => {
    const cardLink = document.createElement("a");
    cardLink.href = post.url;
    cardLink.className = "blog-card";
    cardLink.innerHTML = `
      <h2>${post.title}</h2>
      <div class="date">${post.date}</div>
      <p>${post.description}</p>
    `;
    blogSection.appendChild(cardLink);
  });
}
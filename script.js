// Placeholder blog post data
const posts = [
  {
    title: "Welcome to My Blog!",
    date: "August 25, 2025",
    desc: "This is my space to share thoughts, stories, and tutorials on everything from tech to travel. Stay tuned for regular updates and insights!",
    link: "#"
  },
  {
    title: "Building a Minimal Portfolio Website",
    date: "August 18, 2025",
    desc: "Learn how to create a clean, personal portfolio using only HTML and CSS. Perfect for beginners who want to showcase their work online.",
    link: "#"
  },
  {
    title: "My Favorite Productivity Tools",
    date: "August 10, 2025",
    desc: "From to-do apps to focus timers, these tools help me stay organized and productive every day. Here’s my hand-picked list for 2025!",
    link: "#"
  },
  {
    title: "A Weekend in the Mountains",
    date: "August 2, 2025",
    desc: "I recently spent a weekend hiking and relaxing in the mountains. Read about my favorite trails, scenic views, and travel tips!",
    link: "#"
  }
];

function createPostCard(post) {
  return `
    <div class="post-card">
      <div>
        <div class="post-title">${post.title}</div>
        <div class="post-date">${post.date}</div>
        <div class="post-desc">${post.desc}</div>
      </div>
      <a class="read-more" href="${post.link}">Read More</a>
    </div>
  `;
}

window.addEventListener('DOMContentLoaded', () => {
  const postsGrid = document.getElementById('posts-grid');
  postsGrid.innerHTML = posts.map(createPostCard).join('');
});
export const MOCK_REVIEWS = {
  stars: {
    1: 1,
    2: 8,
    3: 3,
    4: 11,
    5: 100,
  } as Record<number, number>,
  reviews: [
    {
      username: "Nobita",
      avatar:
        "https://static.wikia.nocookie.net/doraemon/images/4/4c/Nobita_567c.jpg/revision/latest/scale-to-width-down/1200?cb=20190730015053&path-prefix=en",
      star: 5,
      comment: "very good product, fast delivery, recommended seller",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKI149iTThBQbyHm23KmrjkooJJvzLvP5q1w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTF_GXNDH0_jSqVJJQLVyFzZOiQ1dZ42rCPQ&s",
      ],
      date: "13/10/2025",
    },
    {
      username: "Shizuka",
      avatar: "https://thophat.com/wp-content/uploads/2022/03/Banh-Gio-1.jpg",
      star: 4,
      comment: "good product, but the packaging could be better",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFSn8OYfkMnhfmgEO0f1IjhDny4n_9f7R6g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFSn8OYfkMnhfmgEO0f1IjhDny4n_9f7R6g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFSn8OYfkMnhfmgEO0f1IjhDny4n_9f7R6g&s",
      ],
      date: "10/10/2025",
    },
    {
      username: "Doraemon",
      avatar: "https://thophat.com/wp-content/uploads/2022/03/Banh-Gio-1.jpg",
      star: 5,
      comment: "excellent product, exceeded my expectations",
      images: [],
      date: "05/10/2025",
    },
  ],
};

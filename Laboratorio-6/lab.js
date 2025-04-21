function createPost(name, message, imageURL) {
    const post = document.createElement('div');
    post.className = 'post';
  
    const img = document.createElement('img');
    img.src = imageURL;
  
    const title = document.createElement('h3');
    title.textContent = name;
  
    const msg = document.createElement('p');
    msg.textContent = message;
  
    post.appendChild(img);
    post.appendChild(title);
    post.appendChild(msg);
  
    return post;
  }
  
  const container = document.getElementById('postsContainer');
  
  for (let i = 1; i <= 826; i++) {
    const name = `Personaje #${i}`;
    const message = `Este es el mensaje del personaje número ${i}.`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
  
    const post = createPost(name, message, imageURL);
    container.appendChild(post);
  }
  
// Change Background Color
document.getElementById('changeColor').addEventListener('click', () => {
    document.body.style.backgroundColor = 
        `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// Add Element Dynamically
document.getElementById('addElement').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = "I'm a new dynamically added element!";
    document.getElementById('output').appendChild(newElement);
});

// Toggle Visibility
document.getElementById('toggleVisibility').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.classList.toggle('hidden');
});

// Animate Element
document.getElementById('animateElement').addEventListener('click', () => {
    const movableDiv = document.getElementById('output');
    movableDiv.classList.add('movable');
    let position = 0;
    const interval = setInterval(() => {
        position += 5;
        movableDiv.style.left = `${position}px`;
        if (position >= 200) clearInterval(interval);
    }, 30);
});

// Fetch and Display Data
document.getElementById('fetchData').addEventListener('click', async () => {
    const output = document.getElementById('output');
    output.textContent = "Loading...";
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    output.textContent = `Fetched Data: ${data.title}`;
});

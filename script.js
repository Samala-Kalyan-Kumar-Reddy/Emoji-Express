const messageContainer = document.querySelector('.message-container');
const emojiContainer = document.querySelector('.emoji-container');
const message = document.querySelector('.message');
const selectedEmojisContainer = document.querySelector('.selected-emojis-container');

messageContainer.addEventListener('click', () => {
    emojiContainer.style.display = emojiContainer.style.display === 'none' ? 'block' : 'none';
});

// Add emojis to the emoji container
const emojis = ['😊', '😍', '👍', '❤️'];

emojis.forEach(emoji => {
    const button = document.createElement('button');
    button.innerText = emoji;
    button.addEventListener('click', () => {
        const selectedEmoji = document.createElement('span');
        selectedEmoji.innerText = emoji;
        selectedEmojisContainer.appendChild(selectedEmoji);
    });
    emojiContainer.appendChild(button);
});

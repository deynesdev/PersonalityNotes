// Скрипт для добавления новой заметки
document.getElementById('addNote').addEventListener('click', function () {
    const main = document.querySelector('main');

    const newNote = document.createElement('div');
    newNote.className = 'note';

    newNote.innerHTML = `
        <h2>Новая заметка</h2>
        <p>Это ваша новая заметка.</p>
    `;

    main.appendChild(newNote);
});

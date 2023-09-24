const states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    // Add more states and capitals as needed
];

const searchInput = document.getElementById('searchInput');
const resultList = document.getElementById('resultList');

function searchStates(query) {
    resultList.innerHTML = '';

    const filteredStates = states.filter(state => state.name.toLowerCase().includes(query.toLowerCase()));

    filteredStates.forEach(state => {
        const listItem = document.createElement('li');
        listItem.textContent = `${state.name} - ${state.capital}`;
        resultList.appendChild(listItem);
    });
}

searchInput.addEventListener('input', function() {
    searchStates(this.value);
});

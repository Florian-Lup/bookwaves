document.addEventListener('DOMContentLoaded', function () {
    const commandInput = document.getElementById('commandInput');
    const commandOptionsContainer = document.getElementById('commandOptionsContainer');
    const commandOptions = document.getElementById('commandOptions');
    const treeViewElement = document.getElementById('treeView');
    const searchInput = document.getElementById('searchInput');
    const closeButton = document.getElementById('closeButton');

    // Data references for topics
    const topics = {
        "HTML": htmlData,
        "CSS": cssData,
        "JavaScript": jsData
    };

    // Event listener for command input
    commandInput.addEventListener('keyup', function () {
        const value = commandInput.value.trim().toLowerCase();
        if (value === '/library') {
            displayCommandOptions();
            closeButton.classList.remove('hidden'); // Show the close button
        } else if (value === '') {
            closeAll(); // Close everything if the input is completely empty
        } else {
            commandOptionsContainer.classList.add('hidden');
            treeViewElement.classList.add('hidden'); // Hide tree when command is not matched
        }
    });

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim().toLowerCase();
        deselectOption(); // Deselect any option when search bar is used

        if (query) {
            searchAndDisplayNode(query);
        } else {
            treeViewElement.classList.add('hidden'); // Hide the tree view when search input is cleared
            clearNotFoundMessage(); // Clear the "Not Found" message
        }
    });

    // Event listener for close button
    closeButton.addEventListener('click', function () {
        closeAll();
    });

    // Display command options for /library
    function displayCommandOptions() {
        commandOptions.innerHTML = '';
        Object.keys(topics).forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            li.addEventListener('click', function () {
                if (!searchInput.value.trim()) {
                    const highlighted = document.querySelector('#commandOptions .selected');
                    if (highlighted) {
                        highlighted.classList.remove('selected');
                    }
                    li.classList.add('selected');
                }
                searchInput.value = '';
                treeViewElement.classList.add('hidden');
                displayTopicContent(topic);
            });
            commandOptions.appendChild(li);
        });
        commandOptionsContainer.classList.remove('hidden');
    }

    // Display tree view for selected topic
    function displayTopicContent(topic) {
        treeViewElement.innerHTML = ''; // Clear previous content
        treeViewElement.classList.remove('hidden'); // Show tree view below options
        createTreeView(topics[topic], treeViewElement);

        // Automatically open the first node
        const firstCaret = treeViewElement.querySelector('.caret');
        if (firstCaret) {
            firstCaret.click();
        }
    }

    // Recursively create tree view structure
    function createTreeView(data, parentElement, level = 1) {
        data.forEach(item => {
            const li = document.createElement('li');
            if (item.children) {
                const span = document.createElement('span');
                span.classList.add('caret');
                span.textContent = item.name;
                li.appendChild(span);

                const ul = document.createElement('ul');
                ul.classList.add('nested', `level-${level}`); // Add level-specific class
                createTreeView(item.children, ul, level + 1);
                li.appendChild(ul);
            } else if (item.description) {
                li.textContent = item.description;
            }
            parentElement.appendChild(li);
        });

        // Add event listeners to caret elements
        const toggler = document.getElementsByClassName("caret");
        for (let i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click", function () {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                this.classList.toggle("caret-down");
            });
        }
    }

    // Search for a node matching the query
    function searchAndDisplayNode(query) {
        treeViewElement.innerHTML = ''; // Clear previous content
        let foundNode = null;

        Object.keys(topics).forEach(topic => {
            const found = searchTree(topics[topic], query);
            if (found) {
                foundNode = found;
                treeViewElement.classList.remove('hidden');
                createTreeView([found], treeViewElement);
            }
        });

        if (!foundNode) {
            treeViewElement.classList.add('hidden'); // Hide the tree view
            showNotFoundMessage();
        } else {
            clearNotFoundMessage();
        }
    }

    // Show "Not Found" message
    function showNotFoundMessage() {
        const notFoundMessage = document.createElement('p');
        notFoundMessage.id = 'notFoundMessage';
        notFoundMessage.textContent = "Not found!";
        notFoundMessage.style.textAlign = 'center';
        notFoundMessage.style.color = '#ff3333';
        notFoundMessage.style.marginTop = '20px';
        treeViewElement.parentElement.appendChild(notFoundMessage);
    }

    // Clear "Not Found" message
    function clearNotFoundMessage() {
        const existingMessage = document.getElementById('notFoundMessage');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    // Deselect any highlighted command option
    function deselectOption() {
        const highlighted = document.querySelector('#commandOptions .selected');
        if (highlighted) {
            highlighted.classList.remove('selected');
        }
    }

    // Close all containers and reset inputs
    function closeAll() {
        commandInput.value = '';
        searchInput.value = '';
        commandOptionsContainer.classList.add('hidden');
        treeViewElement.classList.add('hidden');
        clearNotFoundMessage();
        deselectOption();
        closeButton.classList.add('hidden'); // Hide the close button
    }

    // Recursive search function to find a node
    function searchTree(data, query) {
        for (let item of data) {
            if (item.name.toLowerCase().includes(query)) {
                return item;
            }
            if (item.children) {
                const found = searchTree(item.children, query);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }
});

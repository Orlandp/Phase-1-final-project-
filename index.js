document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const loadDataButton = document.getElementById('loadData');
    const userDetailsContainer = document.getElementById('userDetails');

    // Handle form submission and enable the "Load Data" button
    userForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form refresh

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = document.getElementById('rating').value;

        // Validate the form
        if (name && email && rating) {
            // If the form is valid, enable the "Load Data" button
            loadDataButton.disabled = false;
            // Show user details on the page
            userDetailsContainer.innerHTML = `
                <h2>User Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Rating:</strong> ${rating}/10</p>
            `;
        } else {
            alert('Please fill in all the fields.');
        }
    });

    // Add an event listener to the "Load Data" button to trigger data fetching
    loadDataButton.addEventListener('click', () => {
        // Fetch Energy Audits
        fetch('http://localhost:3000/energyAudits')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const auditsContainer = document.getElementById('energy-audits');
                auditsContainer.innerHTML = "<h2>Energy Audits</h2>"; // Add a section title
                data.forEach(audit => {
                    const auditElement = document.createElement('div');
                    auditElement.innerHTML = `
                        <h3>${audit.title}</h3>
                        <p>${audit.details}</p>
                        <p>Cost: ${audit.cost}</p>
                        <p>Benefits: ${audit.benefits}</p>
                    `;
                    auditsContainer.appendChild(auditElement);
                });
            })
            .catch(error => {
                console.error('Error fetching the energy audits:', error);
            });

        // Fetch Solar Energy data
        fetch('http://localhost:3000/solar energy')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const solarContainer = document.getElementById('solar-energy');
                solarContainer.innerHTML = "<h2>Solar Energy</h2>"; // Add a section title
                data.forEach(solar => {
                    const solarElement = document.createElement('div');
                    solarElement.innerHTML = `
                        <h3>${solar.title}</h3>
                        <p>${solar.details}</p>
                        <p>${solar.content}</p>
                        <img src="${solar['image-url']}" alt="${solar.title}" />
                    `;
                    solarContainer.appendChild(solarElement);
                });
            })
            .catch(error => {
                console.error('Error fetching the solar energy data:', error);
            });

        // Fetch Energy Projects data
        fetch('http://localhost:3000/energy projects')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const projectsContainer = document.getElementById('energy-projects');
                projectsContainer.innerHTML = "<h2>Energy Projects</h2>"; // Add a section title
                data.forEach(project => {
                    const projectElement = document.createElement('div');
                    projectElement.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.details}</p>
                        <a href="${project.url}" target="_blank">Learn more</a>
                    `;
                    projectsContainer.appendChild(projectElement);
                });
            })
            .catch(error => {
                console.error('Error fetching the energy projects:', error);
            });

        // Fetch Energy Saving Tips
        fetch('http://localhost:3000/energy saving tips')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const tipsContainer = document.getElementById('energy-saving-tips');
                tipsContainer.innerHTML = "<h2>Energy Saving Tips</h2>"; // Add a section title
                data.forEach(tip => {
                    const tipElement = document.createElement('div');
                    tipElement.innerHTML = `
                        <h3>${tip.tip}</h3>
                        <p>${tip.content}</p>
                        <p>Potential Saving: ${tip['potential-saving']}</p>
                    `;
                    tipsContainer.appendChild(tipElement);
                });
            })
            .catch(error => {
                console.error('Error fetching the energy saving tips:', error);
            });
    });
});


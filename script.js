function openProject(projectId) {
    let projectContent = '';
    let carouselItems = '';

    // Define project content and images for each project
    if (projectId === 'OurNews') {
        projectContent = `
            <h2>Our News / Asa No Nettowaku</h2>
            <p><strong>Duration:</strong> Aug 2022 - Nov 2022</p>
            <p><strong>Associated with:</strong> University of Mumbai</p>
            <p>This advanced mobile application, developed in Java and XML with Firebase for data storage, helps users stay informed about news, articles, and interesting events around the world. Users can customize the app's theme and switch between multiple languages, including Marathi, English, Japanese, Hindi, Gujarati, and Malayalam.</p>
        `;
        // Add images for the carousel
        let images = [
            './images/Welcome Page.jpeg',
            './images/Registration.jpeg',
            './images/News Interface.jpeg',
            './images/Marathi Language Interface.jpeg',
            './images/Light Theme Interface.jpeg'
        ];

        images.forEach((image, index) => {
            carouselItems += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${image}" class="d-block w-100" alt="Project Image ${index + 1}">
                </div>
            `;
        });
    } else if (projectId === 'FleetFusion') {
        projectContent = `
            <h2>FleetFusion</h2>
            <p><strong>Duration:</strong> Jan 2024 - May 2024</p>
            <p><strong>Associated with:</strong> Savitribai Phule Pune University</p>
            <p>This web application, built using HTML, CSS, and JavaScript with MySQL for data storage, aims to improve operational efficiency, reduce costs, and enhance customer satisfaction for businesses and logistics providers. By automating vehicle management, order processing, and notifications, it addresses the inefficiencies of manual documentation and record-keeping.</p>
        `;
        let images = [
            './images/1 imp.jpeg',
            './images/2.jpeg',
            './images/Provider Login imp.jpeg',
            './images/4.jpeg',
            './images/4A.jpeg',
            './images/6B imp.jpeg',
            './images/User Login imp.jpeg',
            './images/8.jpeg',
            './images/8A.jpeg',
            './images/8B.jpeg',
            './images/8C.jpeg',
            './images/8D.jpeg'
        ];

        images.forEach((image, index) => {
            carouselItems += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${image}" class="d-block w-100" alt="FleetFusion Image ${index + 1}">
                </div>
            `;
        });
    } else if (projectId === 'SmartCityHub') {
        projectContent = `
            <h2>Smart City Hub - Nashik</h2>
            <p><strong>Duration:</strong> July 2024 - Oct 2024</p>
            <p>This research-based mobile app is developed using Java and XML with Firebase for data storage. It aims to enhance urban living by providing real-time information, optimizing city services, and promoting citizen engagement through a user-friendly interface accessible on smartphones and tablets.</p>
        `;
        let images = [
            './images/Welcome page 3.jpg',
            './images/Main City Selection page.jpg',
            './images/Places.jpg',
            './images/Place Information.jpg',
            './images/Sort places.jpg',
            './images/Mapping.jpg'
        ];

        images.forEach((image, index) => {
            carouselItems += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${image}" class="d-block w-100" alt="Smart City Hub Image ${index + 1}">
                </div>
            `;
        });
    }

    // Insert the project content and carousel images dynamically
    document.getElementById('projectContent').innerHTML = projectContent;
    document.getElementById('carouselContent').innerHTML = carouselItems;

    // Open the modal
    $('#projectModal').modal('show');
}

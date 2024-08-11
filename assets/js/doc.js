const doctors = {
    General: [
        { name: 'Dr. Padmasiri Dissanayaka', age: 64, rating: 4.2, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'padmasiri.html' },
        { name: 'Dr. Rilana', age: 34, rating: 4.8, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'rilana.html' },
        { name: 'Dr. Kusal Abesiriwardhana', age: 'N/A', rating: 4.8, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'kusal.html' },
        { name: 'Dr. Mithula Perera', age: 32, rating: 4.8, image: 'assets/images/doctors/Mithula.jpg', bookingPage: 'mithula.html' },
        { name: 'Dr. Saranga Sudarshani', age:  'N/A', rating: 4.8, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'book-doctor-c.html' },
        { name: 'Dr. G. Liyanaarachchi', age:  'N/A', rating: 4.9, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'liyanarachchi.html' },
        { name: 'Dr. Nimeshika Gayathri', age:  'N/A', rating: 4.2, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'nimeshika.html' },
        { name: 'Dr. Yasodara Lokuhitige', age:  'N/A', rating: 4.5, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'yashodara.html' },
        { name: 'Dr. Mohomed Nawas', age:  'N/A', rating: 4.5, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'nawas.html' },
        { name: 'Dr. Faiz', age:  'N/A', rating: 4.0, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'faiz.html' },
    ],
    Gynecology: [
        { name: 'Nirosha Subhashini', age: 47, rating: 5.0, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'nirosha.html' },
        { name: 'Dr. Suresh Namal', age: 'N/A', rating: 4.4, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'suresh.html' },
        { name: 'Dr. Fathima Fakeeha', age: 'N/A', rating: 4.8, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'fakeeha.html' },
    ],
    Beauty: [
        { name: 'Dr. Saranga Sudarshani', age: "N/A", rating: 4.4, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'saranga.html' },
        { name: 'Dr. P.K. Shermila Madawi', age: "N/A", rating: 4.2, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'shermila.html' },
        { name: 'Dr. Udeshi Isurika', age: "N/A", rating: 4.2, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'udeshi.html' },
    ],
    Eyes: [
        { name: 'Dr. Ashoka Priyanthi', age:  'N/A', rating: 4.8, image: 'assets/images/doctors/Ashoka.jpg', bookingPage: 'ashoka.html' },
    ],
    Orthopedic: [
        { name: 'Dr. Daya Madoluwa', age: 68, rating: 4.4, image: 'assets/images/doctors/daya.jpg', bookingPage: '/doctor-1' },
        { name: 'Dr.Buddika Dharmarathne', age: 48, rating: 4.5, image: 'assets/images/doctors/Dr. Buddika Dharmarathne.jpg', bookingPage: 'buddika.html' },
        { name: 'Dr.Prasanga Karunarathna', age: 36, rating: 4.6, image: 'assets/images/doctors/Dr. Prasanga Karunarathna.jpg', bookingPage: 'prasanga.html' },
        { name: 'Dr. Nishantha Kumara', age: 43, rating: 4.6, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'nishantha.html' },
        { name: 'Dr. Priyanthika Madushani', age: 43, rating: 4.4, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'priyanthika.html' },
    ],
    Neurology: [
        { name: 'Dr. Devinda Hettiarachchi', age: 30, rating: 4.5, image: 'assets/images/doctors/Dr devinda.jpg', bookingPage: 'devinda.html' },
        { name: 'Dr. Tharindu Nipun', age: 'N/A', rating: 4.7, image: 'assets/images/doctors/Tharindu.jpg', bookingPage: 'tharindu.html' },
        { name: 'Dr. Rishad Buhari', age: 'N/A', rating: 4.6, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'rishard.html' },
        { name: 'Dr. Parakkrama Hemachandra', age: 'N/A', rating: 5.0, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'parakrama.html' },
    ],
    Pediatrician: [
        { name: 'Dr. Nuwan Sampath', age: 'N/A', rating: 4.7, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'nuwan.html' },
        { name: 'Dr. Nadeesha Sewwandi', age: 36, rating: 4.8, image: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg', bookingPage: 'nadeesha.html' },
    ]
};

if (typeof module !== 'undefined') {
    module.exports = doctors;
}


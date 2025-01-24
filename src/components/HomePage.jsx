import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image">
        <div className="content">
          <h1>Say No To Paper Cups!</h1>
          <p>Here's Why...</p>
          <a href="/learn-more" className="btn-link">Learn More</a>
        </div>
      </div>
      <style jsx>{`
        .home-page {
          height: 100vh; /* Full viewport height */
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('https://m.media-amazon.com/images/I/51xWrbK92bL._AC_UF894,1000_QL80_.jpg'); /* Replace with your image URL */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .content {
          background: rgba(255, 255, 255, 0.8); /* White background with transparency */
          padding: 20px 40px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .content h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .content p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
        }

        .btn-link {
          display: inline-block;
          padding: 10px 20px;
          font-size: 1rem;
          color: white;
          background-color: #007bff;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-link:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

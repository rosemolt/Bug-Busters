import React from 'react';

const Awareness = () => {
  const points = [
    {
      title: 'Resource-Intensive Production',
      details: [
        'Raw Material Use: Paper cups are primarily made from wood pulp, contributing to deforestation.',
        'Water and Energy Consumption: Manufacturing paper cups requires substantial amounts of water and energy, leading to a higher carbon footprint.',
        'Plastic Linings: Most paper cups have a thin plastic coating (polyethylene or PLA) to make them waterproof, adding to their environmental cost.',
      ],
      image: 'https://images.squarespace-cdn.com/content/v1/63bd810bc84e6c4c5f396e08/385175df-9a71-4346-8a3f-8c9389624a85/PAper+CONSUMPTION+2-+HEAL+THE+PLANET+2.jpg', 
    },
    {
      title: 'Non-Biodegradability and Waste',
      details: [
        'Limited Compostability: Due to their plastic lining, paper cups are difficult to compost and often end up in landfills.',
        'Microplastic Pollution: When disposed of improperly, the plastic linings can break down into microplastics, polluting soil and waterways.',
        'High Waste Generation: Billions of paper cups are used annually, creating an enormous waste burden.',
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Landfill.jpg/300px-Landfill.jpg',
    },
    {
      title: 'Recycling Challenges',
      details: [
        'Mixed Material Composition: The combination of paper and plastic makes recycling difficult and costly, as they require specialized facilities to separate the materials.',
        'Low Recycling Rates: Many paper cups are not recycled due to contamination from liquids or the lack of appropriate recycling infrastructure.',
      ],
      image: 'https://www.biffa.co.uk/-/media/project/biffa-sites/biffa/images/insights/newsletter/contaminated-coffee-cups.jpeg?cx=0.5&ch=494&cy=0.27&cw=576&hash=499245EA09902766420A4CB91C1755A1',
    },
    {
      title: 'Carbon Emissions',
      details: [
        'Lifecycle Emissions: The entire lifecycle of a paper cup—from harvesting trees to disposal—produces greenhouse gases, exacerbating climate change.',
        'Single-Use Design: As a single-use product, the energy and resources invested in making paper cups are disproportionately high compared to their short usage span.',
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PulpAndPaperMill.jpg',
    },
    {
      title: 'Environmental Pollution',
      details: [
        'Landfill Overflow: Paper cups contribute to the growing problem of overflowing landfills.',
        'Littering: Improper disposal of paper cups can lead to urban and rural litter, harming wildlife and ecosystems.',
      ],
      image: 'https://images.stockcake.com/public/1/6/7/1677c008-7e75-4c64-9edc-ea86b3d778ec_large/coastal-garbage-accumulation-stockcake.jpg',
    },
    {
      title: 'Impact on Marine Ecosystems',
      details: [
        'Waterway Contamination: Paper cups discarded inappropriately often end up in rivers and oceans, contributing to marine debris.',
        'Harm to Marine Life: The breakdown of plastic linings can be ingested by marine animals, causing injury or death.',
      ],
      image: 'https://media.istockphoto.com/id/1745204808/photo/water-pollution-coffee-paper-cup-garbage-marine-pollution.jpg?s=612x612&w=0&k=20&c=a1ioeXEgBPxWgmTbnxB3LW183lpG8KSgqx91mvnuUJ8=',
    },
  ];

  return (
    <div className="awareness-page">
      <h1 className="title">Why Paper Cups Are a Problem</h1>
      <div className="points-container">
        {points.map((point, index) => (
          <div key={index} className="point">
            <img src={point.image} alt={point.title} className="point-image" />
            <div className="point-content">
              <h2>{point.title}</h2>
              <ul>
                {point.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .awareness-page {
          padding: 20px;
        }

        .title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
          color: #333;
        }

        .points-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .point {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .point-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
        }

        .point-content h2 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .point-content ul {
          padding-left: 20px;
        }

        .point-content li {
          font-size: 1rem;
          color: #555;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default Awareness;

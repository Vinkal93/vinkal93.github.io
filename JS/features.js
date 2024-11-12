document.addEventListener('DOMContentLoaded', function() {
    const features = [
      {
        icon: "Zap",
        title: "Lightning Fast",
        description: "Our platform is optimized for speed, ensuring quick load times and smooth interactions.",
      },
      {
        icon: "Shield",
        title: "Secure by Design",
        description: "We prioritize your data security with end-to-end encryption and regular security audits.",
      },
      {
        icon: "Smartphone",
        title: "Mobile Responsive",
        description: "Access our platform from any device with our fully responsive design.",
      },
      {
        icon: "Globe",
        title: "Global Reach",
        description: "Connect with users worldwide through our extensive network and localization support.",
      },
      {
        icon: "Headphones",
        title: "24/7 Support",
        description: "Our dedicated support team is always ready to assist you, any time of day or night.",
      },
      {
        icon: "BarChart",
        title: "Advanced Analytics",
        description: "Gain valuable insights with our comprehensive analytics and reporting tools.",
      },
    ];
  
    const featuresGrid = document.getElementById('features-grid');
  
    features.forEach((feature, index) => {
      const card = document.createElement('div');
      card.className = 'card flex flex-col';
  
      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';
  
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'w-12 h-12 flex items-center justify-center rounded-full bg-primary-10 mb-4';
  
      const icon = document.createElement('span');
      icon.className = `icon-${feature.icon} w-6 h-6 text-primary`;
      iconWrapper.appendChild(icon);
  
      const cardTitle = document.createElement('h2');
      cardTitle.className = 'card-title';
      cardTitle.textContent = feature.title;
  
      cardHeader.appendChild(iconWrapper);
      cardHeader.appendChild(cardTitle);
  
      const cardContent = document.createElement('div');
      cardContent.className = 'card-content flex-grow';
  
      const cardDescription = document.createElement('p');
      cardDescription.className = 'card-description';
      cardDescription.textContent = feature.description;
  
      cardContent.appendChild(cardDescription);
  
      card.appendChild(cardHeader);
      card.appendChild(cardContent);
  
      featuresGrid.appendChild(card);
    });
  });
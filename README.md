# TriArch Studio Website

A professional landing page for TriArch Studio - NATA Coaching Institute in Chennai.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Interactive FAQ accordion
- Contact form with validation
- Floating call and WhatsApp buttons
- Animated elements on scroll
- Mobile-friendly hamburger menu

## File Structure

```
triarch-studio/
│
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/             # Assets folder (you need to create this)
    ├── logo.png        # TriArch Studio logo (green banner with text)
    ├── hero-image.jpg  # Students studying in architecture studio
    ├── about-image.jpg # Happy students with thumbs up
    ├── feature1.jpg    # Entrance exam assistance image
    ├── feature2.jpg    # Expert faculty team image
    ├── feature3.jpg    # Study materials image
    ├── feature4.jpg    # Practice sessions image
    ├── feature5.jpg    # Online aptitude tests image
    ├── feature6.jpg    # Personal guidance image
    ├── map-anna-nagar.jpg    # Chennai map for Anna Nagar
    ├── map-royapettah.jpg    # Chennai map for Royapettah
    ├── map-tambaram.jpg      # Chennai map for Tambaram
    ├── icon-experience.svg   # 10+ years icon (people/group icon)
    ├── icon-trainers.svg     # World-class trainers icon (star icon)
    ├── icon-resources.svg    # NATA resources icon (people with lightbulb icon)
    └── icon-library.svg      # Modern library icon (books icon)
```

## Assets Folder Setup

Create an `assets` folder in the same directory as your HTML file and add the following images:

### Required Images:

1. **logo.png** - The TriArch Studio logo (green banner with "TRI ARCH STUDIO" text)
   - Dimensions: Approximately 200x80px
   - Format: PNG with transparent background

2. **hero-image.jpg** - Main hero section image
   - Shows students working in an architecture studio
   - Dimensions: 800x600px or similar aspect ratio

3. **about-image.jpg** - About section image
   - Students giving thumbs up, looking happy
   - Dimensions: 600x600px

4. **feature1.jpg to feature6.jpg** - Service/feature images
   - Various images showing students in classes, studying, using computers
   - Dimensions: 400x300px each

5. **map-anna-nagar.jpg, map-royapettah.jpg, map-tambaram.jpg**
   - Maps or location images for each branch
   - Dimensions: 500x400px each

6. **icon-experience.svg, icon-trainers.svg, icon-resources.svg, icon-library.svg**
   - Simple SVG icons for the benefits section
   - You can use icon libraries like Font Awesome or create simple SVG icons

## Icon Suggestions (if creating SVG icons):

- **icon-experience.svg**: Group of people icon
- **icon-trainers.svg**: Star or award icon
- **icon-resources.svg**: People with lightbulb/idea icon
- **icon-library.svg**: Books or library icon

## Quick Start

1. Create the `assets` folder in your project directory
2. Add all required images to the assets folder
3. Open `index.html` in your web browser
4. The website should display with all images loaded

## Customization

### Colors
The website uses CSS variables for easy color customization. Edit these in `style.css`:

```css
:root {
    --primary-green: #9BC94C;
    --dark-green: #7FAF2E;
    --text-dark: #1a1a1a;
    --text-gray: #666;
}
```

### Contact Information
Update phone numbers in `index.html`:
- Search for `tel:+919876543210` and replace with actual phone number
- Search for `https://wa.me/919876543210` and replace with actual WhatsApp number

### Content
All content can be edited directly in `index.html`. The structure is well-organized with clear section comments.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- Responsive Design
- Intersection Observer API for animations

## License

© 2026 Triarch Studio - All rights reserved

## Support

For any questions or issues, please contact the development team.

---

**Note**: This is a static HTML website. For a production environment, you would want to:
1. Add a backend for form submission
2. Implement actual map integration (Google Maps API)
3. Add analytics tracking
4. Optimize images for web
5. Add proper SEO meta tags
6. Implement a Content Management System if needed

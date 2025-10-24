# Just Roll It - Premium Sushi Catering 🍣

A modern, premium single-page landing website for sushi catering services. Built with HTML5, CSS3, Bootstrap 5, and jQuery, featuring a multi-step interactive form with WhatsApp integration.

## 🌐 Live Demo

Visit the live site: [https://artgolwebdev.github.io/sushi/](https://artgolwebdev.github.io/sushi/)

## ✨ Features

### 🎨 Design
- **Premium Business Theme**: Elegant dark blue, gold, and cream color palette
- **Fully Responsive**: Mobile-first design that works on all devices
- **RTL Support**: Native Hebrew (Right-to-Left) language support
- **Smooth Animations**: Scroll effects, fading transitions, and interactive elements

### 📋 Multi-Step Form
- **3-Step Process**: Personal Info → Event Details → Additional Info
- **Visual Progress Indicator**: Shows current step with smooth transitions
- **Real-time Validation**: Instant feedback with green checkmarks and error messages
- **Smart Navigation**: Next/Previous buttons with keyboard support (Enter key)

### ✅ Interactive Validation
- Name validation (minimum 2 characters)
- Israeli phone number format validation with auto-formatting
- Future date validation (no past dates allowed)
- Guest count validation
- Shake animation for validation errors
- Success checkmarks for valid inputs

### 📱 WhatsApp Integration
- Direct form submission to WhatsApp
- Formatted message with all order details
- Automatic redirect with pre-filled message
- Professional Hebrew message format with emojis

### 🎯 Sections
1. **Hero Section** - Eye-catching header with call-to-action
2. **Advantages** - 4 key benefits with icons
3. **Packages** - 3 catering packages (Mini, Standard, Premium)
4. **How It Works** - 3-step process explanation
5. **Testimonials** - Customer reviews
6. **Contact Form** - Multi-step interactive form
7. **Footer** - Contact info and social links

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom styling with animations
- **Bootstrap 5** - Responsive grid and utilities
- **jQuery** - Form interactions and validation
- **Font Awesome 6** - Icons
- **Google Fonts** - Hebrew typography (Rubik, Alef)

## 📁 Project Structure

```
sushi/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS with RTL support
├── scripts.js          # JavaScript for form and interactions
├── assets/             # Images and media files
│   ├── logo-placeholder.png
│   └── hero-sushi.jpg
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- (Optional) Local web server for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/artgolwebdev/sushi.git
   cd sushi
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # PHP
     php -S localhost:8000
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or open `index.html` directly

## 🎨 Customization

### Update Contact Information
Replace the phone number in these locations:
- `index.html` (line 38, 508): Update phone display
- `scripts.js` (line 11): Update WhatsApp number

### Change Images
Replace placeholder images in the `assets/` folder:
- `logo-placeholder.png` - Your logo (recommended: 200x200px)
- `hero-sushi.jpg` - Hero background (recommended: 1920x1080px)

### Modify Colors
Edit color variables in `styles.css` (lines 7-15):
```css
:root {
    --color-dark-blue: #0B2545;
    --color-gold: #D4AF37;
    --color-cream: #F8F4EE;
    --color-accent: #E64A19;
}
```

### Update Packages & Pricing
Edit package details in `index.html` (lines 132-201)

## 📱 WhatsApp Configuration

The form redirects to WhatsApp with a pre-formatted message. To change the recipient:

1. Open `scripts.js`
2. Update line 11:
   ```javascript
   const WHATSAPP_PHONE = '972544563570'; // Your number in international format
   ```
3. Format: Country code + number (no + or spaces)
   - Example: `972544563570` for Israel (+972-54-456-3570)

## 🌍 GitHub Pages Deployment

The site is automatically deployed to GitHub Pages:

1. Push your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from `main` branch
   - Folder: `/ (root)`
   - Save

3. Your site will be live at:
   `https://artgolwebdev.github.io/sushi/`

## 🔧 Form Validation Rules

- **Full Name**: Minimum 2 characters
- **Phone**: Israeli format (10 digits starting with 0)
- **Event Date**: Must be today or future date
- **Guests**: Number greater than 0 (required in step 2)
- **Event Type**: Optional selection
- **Package**: Optional selection
- **Notes**: Optional text area

## 📱 Mobile Responsive

The site is fully responsive with breakpoints:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## ✨ Animation Features

- Smooth scroll to sections
- Form step transitions (slide in/out)
- Shake animation for validation errors
- Fade-in for success messages
- Scroll-triggered card animations
- Hover effects on cards and buttons

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**artgolwebdev**
- GitHub: [@artgolwebdev](https://github.com/artgolwebdev)
- Project: [Just Roll It Sushi](https://github.com/artgolwebdev/sushi)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support or inquiries about the catering service, contact:
- 📱 Phone: +972-54-456-3570
- 📧 Email: info@justrollit.co.il

---

Made with ❤️ for premium sushi catering experiences

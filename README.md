# FindMinMax
 Find Largest and Smallest Number

A simple, elegant web application to find the minimum and maximum values from an array of numbers. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Clean UI**: Modern, responsive design with a dark blue theme
- **Flexible Input**: Accepts numbers separated by commas or spaces
- **Real-time Results**: Instant computation and display of min/max values
- **Error Handling**: User-friendly error messages for invalid inputs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: ARIA labels and semantic HTML for better screen reader support

## 🚀 Live Demo

Open `index.html` in any modern web browser to see it in action!

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with hover effects, transitions, and responsive design
- **Vanilla JavaScript**: No frameworks or dependencies required
- **ES6+**: Modern JavaScript features like arrow functions and destructuring

## 📁 Project Structure

```
largest_smallest_number/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark blue theme
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🔧 How It Works

### Algorithm
The application uses a **single-pass algorithm** with O(n) time complexity:
1. Initialize min and max with the first array element
2. Iterate through the array once
3. Update min/max values during iteration
4. Return both values simultaneously

### Input Processing
- Splits input by commas and/or spaces
- Trims whitespace
- Converts strings to numbers
- Filters out invalid entries

## 📱 Usage

1. **Enter Numbers**: Type numbers separated by commas or spaces
   - Example: `50, 60, 20, 10, 40`
   - Or: `50 60 20 10 40`

2. **Compute**: Click the "Compute" button

3. **View Results**: See the minimum and maximum values displayed below

## 🎨 Customization

### Colors
The current theme uses a dark blue color scheme:
- Background: `#1f3066`
- Container: `#120358`
- Accent: `#0d6efd`

### Styling
Modify `style.css` to:
- Change colors and themes
- Adjust spacing and typography
- Add animations or transitions
- Implement light/dark mode toggle

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your browser

### Alternative: Local Server
For development, you can use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🔍 Code Examples

### Core Function
```javascript
function findMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array must be a non-empty array of numbers");
    }
    let min = arr[0], max = arr[0];
    for (const n of arr) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return { min, max };
}
```

### Input Parsing
```javascript
function parseNumbers(input) {
    return input
        .split(/[ ,]+/)
        .map(s => s.trim())
        .filter(Boolean)
        .map(Number)
        .filter(n => Number.isFinite(n));
}
```

## 🧪 Testing

Test the application with various inputs:
- **Valid numbers**: `1, 2, 3, 4, 5`
- **Mixed separators**: `1,2 3,4 5`
- **Decimals**: `3.14, 2.71, 1.41`
- **Negative numbers**: `-5, -10, -2, 8`
- **Large numbers**: `1000000, 999999, 500000`

## 🤝 Contributing

Contributions are welcome! Here are some ideas:
- Add support for more number formats
- Implement additional statistical functions (mean, median, mode)
- Add data visualization (charts, graphs)
- Create a light/dark theme toggle
- Add unit tests
- Improve accessibility features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with vanilla web technologies for maximum compatibility
- Inspired by the need for simple, efficient number processing
- Designed with modern UX principles and accessibility in mind

## 📞 Support

If you encounter any issues or have suggestions:
1. Check the browser console for error messages
2. Ensure all files are in the same directory
3. Verify your browser supports ES6+ features
4. Open an issue on GitHub

---

**Happy coding! 🎉**

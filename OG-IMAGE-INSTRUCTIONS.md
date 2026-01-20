# How to Generate the Open Graph PNG Image

LinkedIn requires PNG or JPG format for Open Graph images (SVG is not supported).

## Option 1: Using the Generator (Current Browser)
1. The dev server is running and showing the OG image generator at http://localhost:5174/og-generator.html
2. **Right-click on the canvas image**
3. Select **"Save Image As..."**
4. Save it as `og-image.png` in the `public` folder
5. Replace the existing file if prompted

## Option 2: Use an Online Tool
1. Go to https://www.canva.com or https://www.figma.com
2. Create a new design with dimensions: **1200 x 630 pixels**
3. Use the design:
   - Blue gradient background (#1e3a8a to #3b82f6)
   - Text: "E-commerce Dashboard"
   - Subtitle: "Real-time Analytics & Sales Management"
4. Export as PNG with filename: `og-image.png`
5. Save to the `public` folder

## Option 3: Quick Screenshot Method
1. Open the generator page in browser (currently open)
2. Take a screenshot of just the canvas area
3. Crop to exact 1200x630 dimensions
4. Save as `og-image.png` in the `public` folder

## After Creating the PNG:
```bash
git add public/og-image.png
git commit -m "Add PNG Open Graph image for LinkedIn compatibility"
git push
```

Then redeploy on Vercel and test with LinkedIn Post Inspector:
https://www.linkedin.com/post-inspector/

## Current Status:
- ✅ Meta tags updated with absolute URLs
- ✅ OG image generator created
- ⏳ Need to save PNG file manually (see options above)

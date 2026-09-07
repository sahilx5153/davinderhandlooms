# Davinder Handlooms

A handloom textile shop website — bedsheets, blankets, pillows, towels, curtains and more — built as a static site with a live product catalog and WhatsApp-based ordering.

**Live site:** https://sahilx5153.github.io/davinderhandlooms/

## Features

- **Live product catalog** — products are stored in Firebase Firestore and update on the site instantly, no code changes needed
- **Category filtering** — tap Bedsheets, Blankets, Pillows, Towels, or Curtains to instantly filter the shop grid
- **Search** — search products by name, category, or description
- **Product detail view** — tap any product to see all its photos, full description, and price
- **WhatsApp ordering** — every "Buy" button opens WhatsApp with the product name, price, and photo pre-filled
- **Admin panel** (`admin.html`) — password-protected page to add/delete products with up to 3 photos per product, uploaded straight from a phone gallery
- **Editable announcement banner** — the scrolling strip under the search bar (e.g. "SALE. SALE. SALE.") can be changed anytime from the admin panel, no code edits required
- **Google Map** — shop location embedded in the Contact section
- **Mobile-first design** — 2-column product grid on phones, responsive nav with a slide-in menu

## Tech stack

- Plain HTML, CSS, and JavaScript — no build step, no framework
- **Firebase Firestore** — stores product data and the announcement banner text
- **Firebase Authentication** — protects the admin panel (email/password login)
- **Cloudinary** — hosts product photos (free tier, unsigned client-side uploads)
- **GitHub Pages** — hosting

## File structure

```
index.html          The live storefront
admin.html           Password-protected admin panel for managing products
firebase-config.js   Firebase project credentials (shared by both pages)
davinder-logo.jpg    Site logo, used as favicon and in the nav
craft-photo.png      Photo used in the "Our Craft" section
robots.txt           Search engine crawling rules
sitemap.xml          Search engine sitemap
```

## Setup (for a fresh Firebase/Cloudinary project)

1. **Firebase**
   - Create a project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable **Firestore Database** and **Authentication** (Email/Password sign-in method)
   - Add a user under Authentication → Users — this is the admin login
   - Copy your config values into `firebase-config.js`
   - Add your live domain (e.g. `sahilx5153.github.io`) under Authentication → Settings → Authorized domains
   - Set Firestore rules so `products` and `settings` are publicly readable but only writable by a signed-in user:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /products/{productId} {
           allow read: if true;
           allow write: if request.auth != null;
         }
         match /settings/{settingId} {
           allow read: if true;
           allow write: if request.auth != null;
         }
       }
     }
     ```

2. **Cloudinary** (product photo hosting — no billing card required)
   - Sign up free at [cloudinary.com](https://cloudinary.com)
   - Settings → Upload → Upload presets → add a new preset with **Signing Mode: Unsigned**
   - In `admin.html`, set `CLOUDINARY_CLOUD_NAME` and `CLOUDINARY_UPLOAD_PRESET` to your values

3. **Deploy**
   - Push all files to a GitHub repo
   - Settings → Pages → set Branch to `main` / `(root)` → Save
   - Your site goes live at `https://<username>.github.io/<repo-name>/`

## Using the admin panel

Open `admin.html` on the live site, sign in, and you can:
- Add a product with name, description, price, category, and up to 3 photos
- Delete any existing product
- Change the homepage announcement banner text at any time

## Contact

WhatsApp ordering number and shop address are set directly in `index.html` — update the `+91XXXXXXXXXX` phone number and the address text in the Contact section if either changes.

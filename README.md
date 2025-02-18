# NestInn

```folder
public/
│  ├─ css/
│  │  ├─ base/               # Base styles (e.g., reset, typography)
│  │  │   └─ _base.css
│  │  ├─ components/         # Component-specific styles (buttons, forms, modals, etc.)
│  │  │   ├─ _modal.css
│  │  │   ├─ _footer.css
│  │  │   ├─ _filters.css
│  │  │   └─ _showDetails.css
│  │  ├─ pages/              # Page-specific styles (home, listing pages, etc.)
│  │  │   ├─ _index.css
│  │  │   ├─ _show.css
│  │  │   └─ _new.css
│  │  └─ main.css            # Main file that imports all other styles
│  ├─ js/
│  │  ├─ components/         # Component-specific JS (search bar, modal functionality)
│  │  │   ├─ amenities.js
│  │  │   └─ showRatings.js
│  │  ├─ pages/              # Page-specific JS (listing filters, search bar, etc.)
│  │  │   ├─ searchBar.js
│  │  │   └─ map.js
│  │  └─ utilities/          # Utility files (currency, random days, etc.)
│  │      ├─ currencyM.js
│  │      ├─ randomDays.js
│  │      └─ filters.js
│  └─ icons/
│     ├─ filterIcons/         # Organize icons in this subfolder (for clarity)
│     │   ├─ amazing_pools.jpg
│     │   └─ beachfront.jpg
│     └─ Airbnb_icon.png      # Main icon




views/
   ├─ error.ejs
   ├─ includes/
   │  ├─ addReviews.ejs
   │  ├─ allReviews.ejs
   │  ├─ filters.ejs
   │  ├─ flash.ejs
   │  ├─ footer.ejs
   │  ├─ logo.ejs
   │  ├─ modalBox/
   │  │  ├─ allReviewsM.ejs
   │  │  ├─ currencyM.ejs
   │  │  ├─ filtersM.ejs
   │  │  ├─ langM.ejs
   │  │  ├─ logModal.ejs
   │  │  ├─ modal.ejs
   │  │  ├─ showAmenitiesM.ejs
   │  │  └─ showDescM.ejs
   │  ├─ navbar.ejs
   │  ├─ searchBar.ejs
   │  └─ showDetails.ejs
   ├─ layouts/
   │  └─ boilerplate.ejs
   ├─ hostels/                # Changed from "listings" to "hostels"
   │  ├─ edit.ejs
   │  ├─ index.ejs
   │  ├─ new.ejs
   │  └─ show.ejs
   └─ users/
      ├─ login.ejs
      └─ signup.ejs

```

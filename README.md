# AgriLink Rwanda

AgriLink Rwanda is a web-based agricultural marketplace that connects farmers and buyers across Rwanda. The platform enables sellers to showcase agricultural products while allowing buyers to discover, compare, and purchase products from trusted sellers.

---

## Features

### Buyer
- Register and log in
- Browse products
- View product details
- View seller profile
- Search and filter products
- Add products to cart (Coming Soon)
- Buy products (Coming Soon)

### Seller
- Register and log in
- Manage seller profile
- Add products
- Edit products
- Delete products
- View listed products

### General
- Responsive design
- Product categories
- Contact page
- About page
- Smooth animations
- Scroll-to-top button

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Local Storage (temporary)
- PHP (planned)
- MySQL (planned)

---

## Project Structure

```
├───AgriLink Rwanda
│   │   index.html
│   │   README.md
│   │
│   ├───css
│   │       style.css
│   │
│   ├───images
│   │   ├───categories
│   │   ├───hero
│   │   │       bckimg.jpg
│   │   │
│   │   ├───icons
│   │   ├───products
│   │   │   │   product_img_holder.png
│   │   │   │
│   │   │   ├───banana
│   │   │   ├───beans
│   │   │   │       beans1.jpg
│   │   │   │       beans10.jpg
│   │   │   │       beans2.jpg
│   │   │   │       beans3.jpg
│   │   │   │       beans4.jpg
│   │   │   │       beans5.jpg
│   │   │   │       beans6.jpg
│   │   │   │       beans7.jpg
│   │   │   │       beans8.jpg
│   │   │   │       beans9.jpg
│   │   │   │
│   │   │   ├───cassava
│   │   │   │       cassava1.jpg
│   │   │   │       cassava10.jpg
│   │   │   │       cassava2.jpg
│   │   │   │       cassava3.jpg
│   │   │   │       cassava4.jpg
│   │   │   │       cassava5.jpg
│   │   │   │       cassava6.jpeg
│   │   │   │       cassava7.jpeg
│   │   │   │       cassava8.jpg
│   │   │   │       cassava9.jpg
│   │   │   │
│   │   │   ├───colocasia
│   │   │   │       colocasia1.jpg
│   │   │   │       colocasia10.jpg
│   │   │   │       colocasia2.jpg
│   │   │   │       colocasia3.jpg
│   │   │   │       colocasia4.jpg
│   │   │   │       colocasia5.jpg
│   │   │   │       colocasia6.jpg
│   │   │   │       colocasia7.jpg
│   │   │   │       colocasia8.jpg
│   │   │   │       colocasia9.jpg
│   │   │   │
│   │   │   ├───cooking-banana
│   │   │   │       cooking-banana1.jpg
│   │   │   │       cooking-banana10.jpg
│   │   │   │       cooking-banana2.jpg
│   │   │   │       cooking-banana3.jpg
│   │   │   │       cooking-banana4.jpg
│   │   │   │       cooking-banana5.jpg
│   │   │   │       cooking-banana6.jpg
│   │   │   │       cooking-banana7.jpg
│   │   │   │       cooking-banana8.jpg
│   │   │   │       cooking-banana9.jpg
│   │   │   │
│   │   │   ├───fruits
│   │   │   │   └───oranges
│   │   │   │           oranges1.jpg
│   │   │   │
│   │   │   ├───maize
│   │   │   │       maize1.jpg
│   │   │   │       maize10.jpg
│   │   │   │       maize2.jpg
│   │   │   │       maize3.jpg
│   │   │   │       maize4.jpg
│   │   │   │       maize5.jpg
│   │   │   │       maize6.jpg
│   │   │   │       maize7.jpg
│   │   │   │       maize8.jpg
│   │   │   │       maize9.jpg
│   │   │   │
│   │   │   ├───peanuts
│   │   │   │       peanuts1.jpg
│   │   │   │       peanuts10.jpg
│   │   │   │       peanuts2.jpg
│   │   │   │       peanuts3.jpg
│   │   │   │       peanuts4.jpg
│   │   │   │       peanuts5.jpg
│   │   │   │       peanuts6.jpg
│   │   │   │       peanuts7.jpg
│   │   │   │       peanuts8.jpg
│   │   │   │       peanuts9.jpg
│   │   │   │
│   │   │   ├───peas
│   │   │   │       peas1.jpg
│   │   │   │       peas2.jpg
│   │   │   │       peas3.jpg
│   │   │   │       peas4.jpg
│   │   │   │       peas5.jpg
│   │   │   │       peas6.jpg
│   │   │   │       peas7.jpg
│   │   │   │       peas8.jpg
│   │   │   │
│   │   │   ├───potatoes
│   │   │   │       potatoes1.jpg
│   │   │   │       potatoes10.jpg
│   │   │   │       potatoes2.jpg
│   │   │   │       potatoes3.jpg
│   │   │   │       potatoes4.jpg
│   │   │   │       potatoes5.jpg
│   │   │   │       potatoes6.jpg
│   │   │   │       potatoes7.jpg
│   │   │   │       potatoes8.jpg
│   │   │   │       potatoes9.jpg
│   │   │   │
│   │   │   ├───rice
│   │   │   ├───soybeans
│   │   │   │       soybeans1.jpg
│   │   │   │       soybeans10.jpg
│   │   │   │       soybeans2.jpg
│   │   │   │       soybeans3.jpg
│   │   │   │       soybeans4.jpg
│   │   │   │       soybeans5.jpg
│   │   │   │       soybeans6.jpg
│   │   │   │       soybeans7.jpg
│   │   │   │       soybeans8.jpg
│   │   │   │       soybeans9.jpg
│   │   │   │
│   │   │   ├───sweet-potatoes
│   │   │   │       sweet-potatoes1.jpg
│   │   │   │       sweet-potatoes10.jpg
│   │   │   │       sweet-potatoes2.jpg
│   │   │   │       sweet-potatoes3.jpg
│   │   │   │       sweet-potatoes4.jpg
│   │   │   │       sweet-potatoes5.jpg
│   │   │   │       sweet-potatoes6.jpg
│   │   │   │       sweet-potatoes7.jpg
│   │   │   │       sweet-potatoes8.jpg
│   │   │   │       sweet-potatoes9.jpg
│   │   │   │
│   │   │   └───vegetables
│   │   │       └───cabbages
│   │   │               cabbages1.jpg
│   │   │
│   │   └───profiles
│   │           Profile_avatar.png
│   │
│   ├───js
│   │       script.js
│   │
│   └───pages
│           about.html
│           buyer-dashboard.html
│           contact.html
│           login.html
│           product.html
│           products.html
│           register-buyer.html
│           register-seller.html
│           seller-dashboard.html
│           seller.html
```

---

## Future Improvements

- Shopping cart
- Buy Now functionality
- Secure authentication
- Product reviews and ratings
- Admin dashboard
- Online payments
- Order tracking
- Live chat

---

## Developer

Developed as an academic project to promote digital agriculture and improve the connection between farmers and buyers in Rwanda.

---

## License

This project is for educational purposes.

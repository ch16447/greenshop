"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Overlay from "@/components/Overlay";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import HomeComponent from "@/components/HomeComponent";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const cartCount = document.querySelector(".cart__count") as HTMLElement;
    const cartDrawer = document.querySelector(".cart__drawer") as HTMLElement;
    const cartItemsContainer = document.querySelector(".cart__items") as HTMLElement;
    const cartTotal = document.querySelector(".cart__total") as HTMLElement;
    const closeCartBtn = document.querySelector(".close__cart") as HTMLElement;
    const cartIcon = document.querySelector(".cart__icon") as HTMLElement;
    const overlay = document.querySelector(".overlay") as HTMLElement;
    const productContainer = document.getElementById('productContainer') as HTMLElement;

    let cart: Record<string, { name: string; price: number; image: string; quantity: number }> = {}

    productContainer.addEventListener("click", (e) => {
          const target = e.target as Element;
          if (target.closest(".cart__btn")) {
            const card = target.closest(".product__card") as HTMLElement;
          
            const id = card.dataset.name as string;
            const name = card.dataset.name || "";
            const price = parseInt(card.dataset.price || "0");
            const image = card.dataset.image || "";
            
            if (cart[id]) {
              cart[id].quantity++;
            } else {
              cart[id] = { name, price, image, quantity: 1 };
            }
            updateCartDisplay();
            
          }
        });

      function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        let total = 0, count = 0;
        for (let key in cart) {
          const item = cart[key];
          total += item.price * item.quantity;
          count += item.quantity;
          const li = document.createElement("li");
          li.className = "cart__item";
          li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item__info">
              <strong>${item.name}</strong><br>
              <small>$${item.price}</small>
            </div>
            <div class="quantity">
              <span class="decrease">-</span>
              <span>${item.quantity}</span>
              <span class="increase">+</span>
            </div>
          `;
          cartItemsContainer.appendChild(li);
        }
        cartCount.textContent = count.toString();
        cartTotal.textContent = `Total: $${total}`;
      }

      cartItemsContainer.addEventListener("click", (e) => {
        const target = (e.target as Element | null);
        const itemEl = target?.closest(".cart__item") as HTMLElement | null;
        if (!itemEl || !target) return;
        const nameEl = itemEl.querySelector("strong");
        const name = nameEl ? nameEl.textContent || "" : "";

        if (target.classList.contains("increase")) {
          if (cart[name]) cart[name].quantity++;
        } else if (target.classList.contains("decrease")) {
          if (cart[name]) {
            cart[name].quantity--;
            if (cart[name].quantity <= 0) delete cart[name];
          }
        }
        updateCartDisplay();
      });

      cartIcon.addEventListener("click", () => cartDrawer.classList.toggle("active"));
      closeCartBtn.addEventListener("click", () => cartDrawer.classList.remove("active"));

      cartIcon.addEventListener("click", () => {
        cartDrawer.classList.add("active");
        overlay.classList.add("active");
      });

      closeCartBtn.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        overlay.classList.remove("active");
      });

      overlay.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        overlay.classList.remove("active");
      });
        })

  return (
    <>
      <Header/>
      <Overlay/>
      <Cart/>
      <HomeComponent/>
      <Products/>
      <Footer/>
    </>
  );
}

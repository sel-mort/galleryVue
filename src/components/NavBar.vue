/* eslint-disable */
<template>
    
    <div id="nav" class="nav">
      <router-link to="/" class="gallery">Gallery</router-link>
      <nav class="nav-item">
        <router-link :to="{ name: 'details' }">Details</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  
  export default {
  }
  </script>
  
  <style>
  
      .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          background-color: #ede8e8;
          padding: 0rem 1rem;
      }
      .nav > .gallery {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #222;
          text-decoration: none;
      }
      .nav .nav-item {
          box-sizing: border-box;
          margin: 0 5px;
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;
      }
      .nav .nav-item.router-link-exact-active{
          color: white;
          border-bottom: solid 2px #111;
      }
  </style>
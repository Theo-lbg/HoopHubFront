<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// App principal de HoopHub
// Utilise le router pour la navigation entre les pages
</script>

<style>
/* Reset CSS pour éliminer les bordures blanches */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  /* Pour Capacitor/mobile */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
}

#app {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Styles globaux pour mobile */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 25px;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

.card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin: 1rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>

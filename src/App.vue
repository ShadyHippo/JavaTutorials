<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Assignment 0</router-link>
      <router-link to="/about">Assignment 1</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<style>
.indentHeading {
  padding-left: 35px;
}

.left {
  text-align: 'left';
}

.picture {
  padding: 8px;
  padding-right: 45px;
  padding-left: 30px;
}

.body {
  font-family: 'Arial';
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
}

#app {
  margin-left: 160px; 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 10px;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
}

#nav a {
  padding: 6px 8px 6px 8px;
  text-decoration: none;
  font-size: 20px;
  color: #2196F3;
  display: block;
}

#nav a.router-link-exact-active {
  color: #26adc5;
}

#nav a:hover {
  color: #064579;
}
</style>

<template>
  <div id="app">
    <h1>Vue Store</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
    <hr />
    <footer>Copyright Vue Academy 2020</footer>
  </div>
</template>

<style>
/* Master Styles */
h1 {
  color: #42b983; 
  font-family: Arial, Helvetica, sans-serif;   
  font-size: 250%;
  margin: 0px;
}
h2, h3 { 
  color: #435466;
  font-family: Arial, Helvetica, sans-serif;   
  font-weight: lighter;
}
body { 
  margin: 2em; 
  margin-top: 0.5em;
}
body, input[text], button { 
  color: #888; 
  font-family: Cambria, Georgia; 
}
a {
  cursor: pointer;
  cursor: hand;
}
button {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa; 
  cursor: auto;
}
footer {
  padding-top: 10px;
  clear: both;
}
.left {
  float: left;
}

.right {
  float: right;
}

/* Navigation link styles */
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.router-link-exact-active {
  color: #FFF;
  background-color: #42b983;
}

/* items class */
.items {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 24em;
}
.items li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.items li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.items li.selected:hover {
  background-color: #BBD8DC;
  color: white;
}
.items .text {
  position: relative;
  top: -3px;
}
.items {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 24em;
}
.items li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.items li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.items li.selected {
  background-color: #CFD8DC;
  color: white;
}

.items li.selected:hover {
  background-color: #BBD8DC;
}
.items .text {
  position: relative;
  top: -3px;
}
.items .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

/* everywhere else */
* { 
  font-family: Arial, Helvetica, sans-serif; 
}

*[disabled] {
  cursor: not-allowed;
}

/* transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes acrossIn {
  0% { transform: translate3d(-100%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
 
@keyframes acrossOut {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(100%, 0, 0); }
}

.page-enter-active {
  animation: acrossIn .45s ease-out both;
} 
 
.page-leave-active {
  animation: acrossOut .65s ease-in both;
} 



</style>

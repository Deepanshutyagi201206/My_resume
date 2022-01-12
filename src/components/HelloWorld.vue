<template>
  <div class="head-section">
    <div class="frist-sub-head-section">
      <div class="logo-section">
        <h2>Resume</h2>
      </div>
      <div class="search-section">
        <input type="text" placeholder="Enter here to search">
        <button>Search</button>
      </div>
    </div>
    <div class="second-sub-head-section">
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    *{
        margin: 0px;
        padding:0px;
        font-family: sans-serif
    }
    body{
        padding: 0 4vw
    }
    .frist-sub-head-section{
        display: grid;
        grid-template-columns: 70% auto;
    }
    .logo-section{
        background-color: #faac4d;
        color: white;
        padding: 1vw
    }
    .search-section{
        display: flex;
    }
    .search-section input{
        width: 100%;
        padding: 1vw
    }
    .search-section input:focus{
        outline: 0px;
    }
    .search-section button{
        border: 0px;
        background-color: black;
        color: white;
        padding: 1vw 2vw;
    }
</style>

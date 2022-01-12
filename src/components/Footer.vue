<template>
<div class="footer-section">
    <h4>Comment box to suggest</h4>
    <form>
        <input type="text" placeholder="First name"><br>
        <input type="text" placeholder="Last name"><br>
        <input type="text" placeholder="Mobile No."><br>
        <input type="text" placeholder="Email"><br>
        <input type="text" placeholder="D.O.B"><br>
        <input type="password" placeholder="Password"><br>
        <textarea rows="5" cols="54.5">Enter comment here to suggest</textarea><br>
        <button>Submit</button>
    </form>
</div>
</template>

<script>
export default {
    name : 'Footer.vue'
}
</script>

<style>

*{
    box-sizing : border-box;
}
.footer-section{
    margin-top:4vw;
    padding : 0 1vw;
    padding-top :2vw;
    background-color : darkgray;
}
.footer-section form{
    padding: 2vw 4vw;
}
.footer-section input{
    margin-bottom: 20px;
    width:100%;
    padding: .5vw 1vw;
}
.footer-section textarea{
    margin-bottom: 20px;
    width:100%;
    padding : .5vw 1vw;
}
.footer-section button{
    margin: auto;
    padding : .5vw 1vw;
    display: block;
}
</style>
<template>
<div class = "main-box">
    <h5>Skills and others</h5>
    <dl class="content-box">
        <dt>Basic Skills</dt>
            <ul>
                <li>Good skill of English and Hindi language.</li>
                <li>Good creativity</li>
            </ul>
        <dt>Technical Skills</dt>
            <ul>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>VueJS</li>
                <li>Basic Computer</li>
            </ul>
        <dt>Hobies</dt>
            <ul>
                 <li>I have only one hoby that is playing cricket</li>
            </ul>
    </dl>
</div>
</template>

<script>
export default {
    name : 'Skills'
}
</script>

<style>
.main-box{
    outline: .2vw solid #faac4d;
    font-size: 1.2vw;
    margin-bottom: 2vw;
}
.main-box h5{
    background-color: #faac4d;
    color: white;
    padding: 1vw
}
.content-box{
    padding: 1vw;
}
</style>

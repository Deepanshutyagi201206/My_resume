<template>
<div class = "main-box">
    <h5>Achievement</h5>
    <dl class="content-box">
        <dt>In engineering</dt>
            <ul>
                <li>I have got gold medal in 1st year of B.Tech</li>
                <li>I have got certificate of Excellent performance in B.tech 3rd year.</li> 
                <li>I have published paper in JETIR on "Smart rain water harvesting"</li>
            </ul>
        <dt>After Engineering</dt>
            <ul>
                <li>I have gain many IT-skills by online platform</li>
                 <li>Skills : HTML, CSS, JavaScript, Bootstrap, Sql, MySql</li>
            </ul>
    </dl>
</div>
</template>

<script>
export default {
    name : 'Achievement'
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
    padding: 1vw
}
</style>
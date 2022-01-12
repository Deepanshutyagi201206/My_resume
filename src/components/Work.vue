<template>
<div class = "main-box work-main-box">
    <h5>Work and Experiance</h5>
    <dl>
        <dd>Company name : BimSym Tech Support Pvt Ltd</dd>
        <dd>Profile name : Frontend Web Developer</dd>
        <dd>Employment Type : Trainee</dd>
        <dd>Time : 8-July-2021 to Present</dd>
    </dl>
    <dl>
        <dd>Company name : Techsnap</dd>
        <dd>Profile name : Frontend Web Developer</dd>
        <dd>Employment Type : Intern</dd>
        <dd>Time : 1-Dec-2021 to 31-Dec-2021</dd>
    </dl>
</div>
</template>

<script>
export default {
    name : 'Work'
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
.work-main-box dl{
    padding: 1vw
}
.work-main-box dl dd:last-child{
    margin-bottom: 1vw
}
</style>
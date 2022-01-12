<template>
<div class = "main-box">
    <h5>Projects</h5>
    <dl class="content-box">
        <dt>Personal Projects</dt>
        <ul>
            <li>To Apply a course</li>
            <dl>
                <dd>The link given below</dd>
                <dd>https://deepanshutyagi201206.github.io/third_projrct/</dd>
            </dl>

            <li>To Apply a job</li>
            <dl>
                <dd>The link given below</dd>
                <dd>https://deepanshutyagi201206.github.io/second_test_project/</dd>
            </dl>
            <li>Arithmetic calculator</li>
            <dl>
                <dd>The link given below</dd>
                <dd>https://deepanshutyagi201206.github.io/calculator/</dd>
            </dl>
            <li>My resume</li>
            <dl>
                <dd>Introduction : I have made this project using of VueJS. The link given below</dd>
                <dd>https://deepanshutyagi201206.github.io/calculator/</dd>
            </dl>
        </ul>
    </dl>
</div>
</template>

<script>
export default {
    name : "Project"
}
</script>

<style>
.main-box{
    outline: .2vw solid #faac4d;
    font-size: 1.2vw;
    margin-bottom: 2vw;
}
.main-box ul{
    padding: 2vw
}
.main-box h5{
    background-color: #faac4d;
    color: white;
    padding: 1vw
}
.content-box{
    padding: 1vw
}
.content-box ul{
    padding-bottom: 0px
}
.content-box dl dd:last-child{
    margin-bottom: 1vw
}
</style>
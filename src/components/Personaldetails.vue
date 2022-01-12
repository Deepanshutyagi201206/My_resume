<template>
    <div class="main-box personal-main-box">
        <h5>Personal details</h5>
        <ul>
            <li>Name:-Deepanshu tyagi</li>
            <li>Father name:- Maan singh tyagi</li>
            <li>D.O.B:- 01/02/1999</li>
            <li>Language:- Hindi/English</li>
            <li>Nationality:- Indian</li>
            <li>Maritial status:- Unmaried</li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Personaldetails'
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
.personal-main-box ul li:last-child{
    margin-bottom: 0px !important
}
.main-box h5{
    background-color: #faac4d;
    color: white;
    padding: 1vw
}
</style>





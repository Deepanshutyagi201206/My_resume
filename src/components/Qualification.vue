<template>
    <div class = "main-box">
        <h5>Qualification</h5>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Qual.</th>
                    <th>Perce.</th>
                    <th>Year</th>
                    <th>S..l/C..e</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>10th</td>
                    <td>70%</td>
                    <td>2016</td>
                    <td>Shri hans inter college</td>
                </tr>
                <tr >
                    <td>12th</td>
                    <td>53%</td>
                    <td>2014</td>
                    <td>Shri hans inter college</td>
                </tr>
                <tr>
                    <td>B.Tech</td>
                    <td>78%</td>
                    <td>2020</td>
                    <td>R.D. Engineering College</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : 'Qualification'
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
.main-box table{
    width:100%;
}
.main-box table,th,td{
    border : .1vw solid black;
    border-collapse : collapse;
}
.main-box th,td{
    padding : .5vw 1vw;
}
</style>
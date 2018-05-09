<template>
    <div>
        <myHeader></myHeader>
        <!-- <div class="guangao"></div> -->
        <h2 v-text="dat.title"></h2>
        <img src="static/image/1.jpg" alt="" style="width:100px;height:100px;">
        <img alt="" v-bind:src="dat.author.avatar_url" v-if="dat.author">
        <p class="author0" v-if="dat.author">作者： {{ dat.author.loginname }}    发表于： {{ $utils.goodTime(dat.create_at) }}</p>
    <hr>
    <article v-html="dat.content"></article>
    <hr>
    <h3>网友回复： </h3>
    <ul>
        <li v-for="i in dat.replies">
            <p class="author1" v-if="dat.author">评论者：{{ i.author.loginname }}     评论于：{{ $utils.goodTime(i.create_at) }}</p>
            <article v-html="i.content"></article>
        </li>
    </ul>
    <myFooter></myFooter>
    </div>
</template>

<style>
    .author0{
        font-size: 19px;
        color: lightslategrey;
    }
    .author1{
        font-size: 19px;
        color: lightslategray;
    }
    .guangao{
        height: 400px;
        background: url('../../static/image/1.jpg') no-repeat;
    }
</style>

<script>
    import myHeader from "../components/header.vue"
    import myFooter from "../components/footer.vue"

    export default {
        components: { myHeader, myFooter },
        data: function() {
            return {
                id: this.$route.params.id,
                dat: {}
            }
        },
        created: function() {
            console.log("$route: ", this.$route);
            
            this.getData();
        },
        methods: {
            getData : function() {
                this.$api.get('topic/' + this.id, null, r => {
                    console.log("dat: ", r.data);
                    
                    this.dat = r.data;
                })
            }
        }
    }
</script>
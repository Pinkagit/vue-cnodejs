<template>
    <div>
        <Header></Header>
        <div class="article_list">
            <ul>
                <li v-for="i in list" :key="i.id">
                    <time v-text="$utils.goodTime(i.create_at)" style="display:inline-block; width:150px;"></time>
                    <router-link :to="'/content/' + i.id">
                        {{ i.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'
    
    export default {
        components: { Header, Footer },
        data: function(){
            return {
                list:[]
            }
        },
        created () {
            this.getData()
        },
        methods: {
            getData () {
                this.$api.get('topics', null, r => {
                    console.log(r);
                    this.list = r.data;
                })
            }
        }
    }
</script>
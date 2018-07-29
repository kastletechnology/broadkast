<template>
  <div class="hello">

    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      items: [
        {
          src: 'https://d2mga161gr9g8n.cloudfront.net/1200/posts/201612221510-KYEf.jpg'
        },
        {
          src: 'http://i.imgur.com/luYrZY0.jpg'
        },
        {
          src: 'https://cdn2.ettoday.net/images/1696/d1696738.jpg'
        },
        {
          src: 'http://image.zixundingzhi.com/5pGixwaGPab2C7TczOIOSK8_nGo=/660x0/full/0c651260eba5e55986afb2b96a3627e89e1a5352'
        },
        {
          src: 'http://images.china.cn/attachement/jpg/site1000/20151229/001aa0bce27417ec5dc436.jpg'
        }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

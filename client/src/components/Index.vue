<template>
  <div class="hello">

    <v-layout row justify-center>
      <v-flex xs10>
        <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <!-- <v-layout row justify-center>
      <table>
        <td>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
        </td>
        <td>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
        </td>
        <td>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
        </td>
        <td>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
          <tr><course-temp /></tr>
        </td>
    </table>
    </v-layout> -->
  </div>
</template>

<script>
import CourseTemp from './CourseTemp'
export default {
  name: 'Index',
  data () {
    return {
      items: [
        {
          src: 'https://d2mga161gr9g8n.cloudfront.net/1200/posts/201612221510-KYEf.jpg'
        },
        {
          src: 'http://img1.how01.com/imgs/aa/8d/2/5b460000855c40fe4ac7.jpg'
        },
        {
          src: 'https://cdn2.ettoday.net/images/1696/d1696738.jpg'
        },
        {
          src: 'http://image.zixundingzhi.com/5pGixwaGPab2C7TczOIOSK8_nGo=/660x0/full/0c651260eba5e55986afb2b96a3627e89e1a5352'
        },
        {
          src: 'http://images.china.cn/attachement/jpg/site1000/20151229/001aa0bce27417ec5dc436.jpg'
        },
        {
          src: 'https://static.ettoday.net/images/2089/d2089838.jpg'
        },
        {
          src: 'http://www.dailyder.com/uploads/70/c/393/14331392836440.jpg'
        },
        {
          src: 'http://houndcom-news.com/cms/wp-content/uploads/20170807shiba01.jpg'
        },
        {
          src: 'https://static.curazy.com/wp-content/uploads/2015/01/dd1a0d18bafebd7f0fbca006022d04f3-604x270.jpg'
        },
        {
          src: 'https://breeder-dog.com/puppy/wp-content/uploads/2017/08/siba2.jpg'
        },
        {
          src: 'https://www.min-petlife.com/data/article/9205/main_9205_31240_detail.jpg'
        },
        {
          src: 'https://wanpedia.com/wordpress/wp-content/uploads/2017/02/Fotolia_134143643_Subscription_Monthly_M.jpg'
        }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CourseTemp
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

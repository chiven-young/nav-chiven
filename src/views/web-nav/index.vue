<template>
  <div class="nav-list">
    <n-grid cols="1 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
      <n-grid-item v-for="item in items" v-bind:key="item.id" v-bind:style="{backgroundImage:'url('+item.imgUrl+')'}" class="project-card">
        <div class="project-card-info">
          <div class="project-card-title">{{item.title}}</div>
          <div class="project-card-desc">{{item.desc}}</div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {
      items: [
        {
          id: 1,
          sort: 'article',
          title: '第一个文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2020/11/28/10/09/mountains-5784153__340.jpg'
        },
        {
          id: 2,
          sort: 'mindmap',
          title: '测试文档-思维导图',
          desc: '这是描述，这个描述很长很长很长很长很长很长',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/05/11/22/vinpearl-land-6847412__340.jpg'
        },
        {
          id: 3,
          sort: 'flowchart',
          title: '测试文档-流程图',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/14/11/13/church-6794319__340.jpg'
        },
        {
          id: 4,
          sort: 'todo',
          title: '测试文档-待办',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/19/05/08/bicycle-6808140__340.jpg'
        },
        {
          id: 5,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/12/22/48/mountain-6867146__480.jpg'
        },
        {
          id: 6,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640__340.jpg'
        },
        {
          id: 7,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/07/18/30/cat-6853848__340.jpg'
        },
        {
          id: 8,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/16/03/34/online-6873703__480.jpg'
        },
        {
          id: 9,
          sort: 'article',
          title: '第一个文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2020/11/28/10/09/mountains-5784153__340.jpg'
        },
        {
          id: 10,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述，这个描述很长很长很长很长很长很长',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/05/11/22/vinpearl-land-6847412__340.jpg'
        },
        {
          id: 11,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/14/11/13/church-6794319__340.jpg'
        },
        {
          id: 12,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/19/05/08/bicycle-6808140__340.jpg'
        },
        {
          id: 13,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/12/22/48/mountain-6867146__480.jpg'
        },
        {
          id: 14,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640__340.jpg'
        },
        {
          id: 15,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/07/18/30/cat-6853848__340.jpg'
        },
        {
          id: 16,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/16/03/34/online-6873703__480.jpg'
        },
        {
          id: 17,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/19/05/08/bicycle-6808140__340.jpg'
        },
        {
          id: 18,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/12/22/48/mountain-6867146__480.jpg'
        },
        {
          id: 19,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640__340.jpg'
        },
        {
          id: 20,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/07/18/30/cat-6853848__340.jpg'
        },
        {
          id: 21,
          sort: 'article',
          title: '测试文档',
          desc: '这是描述',
          imgUrl: 'https://cdn.pixabay.com/photo/2021/12/16/03/34/online-6873703__480.jpg'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.project-card {
  height: 140px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px;
  position: relative;
  outline: 1px solid rgba(128,128,128,0.1);
}
.project-card:hover {
  box-shadow: 2px 2px 18px rgba(128,128,128,0.5);
}
.project-cover-edit {
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0,0,0,0.2);
}
.project-card:hover .project-cover-edit {
  display: inline-flex;
  background-color: rgba(0,0,0,0.4);
}
.project-card-info {
  position: absolute;
  width: auto;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 8px 8px;
  color: #ffffff;
  background-color: rgba(0,0,0,0.3);
  padding: 8px;
}
.project-card-title {
  font-size: 14px;
}
.project-card-desc {
  font-size: 12px;
  opacity: 0.6;
  overflow: hidden;
  white-space: nowrap;
}
</style>

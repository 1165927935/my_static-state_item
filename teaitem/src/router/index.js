import Vue from 'vue'
import Router from 'vue-router'

// 主页
const Home = () => import('../view/home_page/home_page.vue')


// 品牌组件
const Brand = () => import('../view/brand/brand.vue')
const AboutSelf = () => import('../view/brand/about_ourself.vue')
const WashMethod = () => import('../view/brand/wash_method.vue')
const TeaMaster = () => import('../view/brand/tea_master/tea_master.vue')
const TeaMasterAll = () => import('../view/brand/tea_master/tea_master_all.vue')
const TeaMasterLin = () => import('../view/brand/tea_master/tea_master_lin.vue')
const TeaMasterGao = () => import('../view/brand/tea_master/tea_master_gao.vue')
const TeaMasterWu = () => import('../view/brand/tea_master/tea_master_wu.vue')
const TeaMasterZhang = () => import('../view/brand/tea_master/tea_master_zhang.vue')


const SurroundProduct = () => import('../view/brand/surround_product.vue')
const Surrounditemp = () => import('../view/brand/surrounditem/surrounditemp.vue')
const Surrounditem1 = () => import('../view/brand/surrounditem/surrounditem1.vue')
const Surrounditem2 = () => import('../view/brand/surrounditem/surrounditem2.vue')
const Surrounditem3 = () => import('../view/brand/surrounditem/surrounditem3.vue')
const PersonRecruit = () => import('../view/brand/person_recruit.vue')
const Partner = () => import('../view/brand/partner.vue')

// 新闻组件
const News = () => import('../view/news/news.vue')
const NewsAll = () => import('../view/news/news_all.vue')
const NewsNew = () => import('../view/news/news_new.vue')
const NewsItemP = () => import('../view/news/newsItem/newsitemp.vue')
const NewsItem1 = () => import('../view/news/newsItem/newsitem1.vue')
const NewsItem2 = () => import('../view/news/newsItem/newsitem2.vue')



// 茶叶总类组件
const TeaType = () => import('../view/teaType/tea_type.vue')
const TeaTypeAll = () => import('../view/teaType/tea_type_all.vue')
const TeaTypeGreen = () => import('../view/teaType/tea_type green_tea.vue')
const TeaTypeRed = () => import('../view/teaType/tea_type red_tea.vue')
const TeaTypeOolong = () => import('../view/teaType/tea_type_oolong.vue')
const TeaTypeYellow = () => import('../view/teaType/tea_type_yellow.vue')
const TeaTypeWhite = () => import('../view/teaType/tea_type_white.vue')
const TeaTypeBlack = () => import('../view/teaType/tea_type_black.vue')
const TeaItemP = () => import('../view/teaType/teaitem/tea_itemp.vue')
const TeaItem1 = () => import('../view/teaType/teaitem/tea_item1.vue')
const TeaItem2 = () => import('../view/teaType/teaitem/tea_item2.vue')




// 联系模块组件
const Contact = () => import('../view/contact/contact.vue')


//消除vue-router.esm.js莫名报错
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/brand',
    component: Brand,
    meta: {
      title: '品牌'
    },
    children: [
      {
        path: '',
        redirect: 'aboutSelf'
      },
      {
        path: 'aboutSelf',
        component: AboutSelf
      },
      {
        path: 'washMethod',
        component: WashMethod
      },
      {
        path: 'teaMaster',
        component: TeaMaster,
        meta: {
          title: '品牌11'
        },
        children: [
          {
            path: '',
            redirect: 'teaMasterAll'
          },
          {
            path: 'teaMasterAll',
            component: TeaMasterAll
          },
          {
            path: 'teaMasterLin',
            component: TeaMasterLin 
          },
          {
            path: 'teaMasterGao',
            component: TeaMasterGao 
          },
          {
            path: 'teaMasterWu',
            component: TeaMasterWu
          },
          {
            path: 'teaMasterZhang',
            component: TeaMasterZhang
          },
        ],
      },
      {
        path: 'surroundProduct',
        component: SurroundProduct,
      },
      {
        path: 'personrecruit',
        component: PersonRecruit
      },
      {
        path: 'partner',
        component: Partner
      },
    ],
  },
  {
    path: '/surrounditemp',
    component: Surrounditemp,
    meta:{
      title:'品牌'
    },
    children: [
          {
            path: 'surrounditem1',
            component: Surrounditem1
          },
          {
            path: 'surrounditem2',
            component: Surrounditem2
          },
          {
            path: 'surrounditem3',
            component: Surrounditem3
          },
              ],
  },
  {
    path: '/news',
    component: News,
    meta: {
      title: '新闻资讯'
    },
    children: [
      {
        path: '',
        redirect: 'newsAll'
      },
      {
        path: 'newsAll',
        component:NewsAll
      },
      {
        path: 'newsNew',
        component: NewsNew
      }
    ],
  },
  {
    path: '/newsItemP',
    component: NewsItemP,
    meta: {
      title: '新闻资讯'
    },
    children: [
      {
        path: '',
        redirect: 'newsItemP'
      },
      {
        path: 'newsItem1',
        component:NewsItem1
      },
      {
        path: 'newsItem2',
        component:NewsItem2
      }
    ],
  },
  {
    path: '/teatype',
    component: TeaType,
    meta: {
      title: '茶叶种类'
    },
    children: [
      {
        path: '',
        redirect: 'teaTypeAll'
      },
      {
        path: 'teaTypeAll',
        component:TeaTypeAll
      },
      {
        path: 'green',
        component: TeaTypeGreen
      },
      {
        path: 'red',
        component: TeaTypeRed
      },
      {
        path: 'oolong',
        component: TeaTypeOolong
      },
      {
        path: 'yellow',
        component: TeaTypeYellow
      },
      {
        path: 'white',
        component: TeaTypeWhite
      },
      {
        path: 'black',
        component: TeaTypeBlack
      },
    ],
  },
  {
    path: '/teaitemp',
    component: TeaItemP,
    meta: {
      title: '茶叶种类'
    },
    children: [
      {
        path: 'teaItem1',
        component: TeaItem1
      },
      {
        path: 'teaItem2',
        component: TeaItem2
      }
    ],
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/back',
    component: Home,
    meta: {
      title: '首页'
    }
  },
]


const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // document.title = to.matched[0].meta.title
  // console.log('beforeeach');
  console.log(to.path);
  next()
})

export default router

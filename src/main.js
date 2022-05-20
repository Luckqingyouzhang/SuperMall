import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import { Card } from 'vant';
import { SwipeCell, Button } from 'vant';
import { CouponCell, CouponList } from 'vant';
import { ActionSheet } from 'vant';
import { SubmitBar } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';

Vue.config.productionTip = false
//创建 $bus
Vue.prototype.$bus = new Vue()

Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(ActionSheet);
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Dialog);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})



/**
 * 左侧导航栏
 * 
 */
import { RouterView} from 'vue-router';

import { defineComponent, ref } from 'vue';
import './main.scss'
const Main = defineComponent({
    name:'Main',
  setup(prop) {
    const count = ref(0)
    return () => (
      <>
      <RouterView/>
      </>
    );
  },
});
export default Main

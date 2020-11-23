/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-11-16 15:20:59
 * @LastEditors: zml
 * @LastEditTime: 2020-11-16 15:21:15
 */
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    return () => (
      <>
        <h1>Home</h1>
        <h1>{store.state.title}</h1>
      </>
    );
  }
});
/**
 * 左侧导航栏
 * 
 */
import { defineComponent, ref } from 'vue';
import './Sidebar.scss'
const sidebar = defineComponent({
    name:'Sidebar',
  setup(prop) {
    const count = ref(0)
    return () => (
      <>
      <div class="Sidebar">Left</div>
      </>
    );
  },
});
export default sidebar

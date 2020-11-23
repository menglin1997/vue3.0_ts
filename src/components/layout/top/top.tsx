import { defineComponent, ref } from 'vue';
import './top.scss'
const top = defineComponent({
  setup(prop) {
    const count = ref(0)
    return () => (
      <>
      <header>
        头部
      </header>
      </>
    );
  },
});
export default top

import { defineComponent, ref,Component } from 'vue';
import './index.css'
import Top from './top/top' // 要大写
import Sidebar from './sidebar/sidebar' // 要大写
import Main from './main/main' // 要大写

export default defineComponent({
  // components: {
  //   top
  // },
  name:'Layout',
  setup() {
    return () => (
      <>
        {/* 头部 */}
        <div class="header">
          <Top></Top>
        </div>

        {/* 主题内容 */}
        <div class="layout-content">
          {/* 左边 */}
          <Sidebar></Sidebar>

          {/* 主体视图层 */}
          <div style="overflow-y:auto;overflow-x:hidden;" class="main">
            <keep-alive>
              <Main>

              </Main>

            </keep-alive>
           
          </div>
        </div>
      </>
    );
  },
});

import ScrollOut from "scroll-out"

export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    // ページ遷移ごとに行いたい処理
    // console.log('page changed! :from plugins/routerOption.js')
    // window.onload = () => {
    //   ScrollOut({
    //     cssProps: {
    //       // viewportY: true,
    //       visibleY: true
    //     }
    //   })
    // }
  })
}

export default function (context) {
  // 相当于路由 的before router
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  // 此js 打印出来的 日志直接在下面的控制台显示
  // console.log(context);
  console.log(process.server);
  // console.log(req);
  // console.log(context.req.headers['user-agent']);
  // console.log(navigator.userAgent);
  // console.log(navigator.userAgent);
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  // console.log(context.userAgent);
}

# Personal Capability Site

一个用于展示个人能力的现代个人网站骨架。当前方向是“Capability System”：不是普通简历页，而是用能力结构、项目证据、工作方式和联系入口来表达一个人的专业可信度。

## 构建计划

1. 视觉方向：白底、黑色强排版、青色和红色信号线，偏编辑感和系统感，避免传统简历模板。
2. 页面结构：首屏、能力地图、精选作品、工作方式、联系入口。
3. 技术栈：React + Vite，后续容易接动画、CMS、作品详情页和部署流程。
4. 验证方式：本地浏览器预览，检查桌面与移动端布局、文字换行、交互按钮和视觉节奏。
5. 部署路径：优先 Vercel 或 Netlify；如果希望完全绑定 GitHub，也可以用 GitHub Pages。

## 开发命令

```bash
npm install
npm run dev
```

## 部署建议

- Vercel：连接 GitHub 仓库，Build Command 使用 `npm run build`，Output Directory 使用 `dist`。
- Netlify：连接 GitHub 仓库，Build Command 使用 `npm run build`，Publish Directory 使用 `dist`。
- GitHub Pages：需要在 Vite 中补充 `base` 路径，并配置 Pages workflow。

## 下一步

- 把 `Your Name`、邮箱、项目内容替换成真实资料。
- 为 Selected Work 增加项目详情页或弹窗。
- 添加更强的首屏微动效和滚动进入动画。
- 用真实头像、作品截图或 Figma 设计稿继续强化视觉可信度。

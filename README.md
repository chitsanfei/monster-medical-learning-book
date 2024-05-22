<div align="center">
    <hr>
    <img src="./static/img/humor.png" height="200" alt="sekai-voice-fetch"> 
    <h1>monster-medical-learning-book</h1>
    <b>妖怪们的医学书</b>
</div>

<br>

<p align="center">
    <a href="https://github.com/chitsanfei/monster-medical-learning-book/issues"><img src="https://img.shields.io/github/issues/chitsanfei/monster-medical-learning-book"></a>
    <a href="https://github.com/chitsanfei/monster-medical-learning-book/forks"><img src="https://img.shields.io/github/forks/chitsanfei/monster-medical-learning-book"></a>
    <a href="https://github.com/chitsanfei/monster-medical-learning-book"><img src="https://img.shields.io/github/stars/chitsanfei/monster-medical-learning-book"></a>
    <a href="https://github.com/chitsanfei/monster-medical-learning-book/blob/main/LICENSE"><img src="https://img.shields.io/github/license/chitsanfei/monster-medical-learning-book"></a>
    <a href="https://github.com/chitsanfei/monster-medical-learning-book"><img src="https://img.shields.io/github/commit-activity/t/chitsanfei/monster-medical-learning-book"></a>
</p>

<div align="center">
    <img src="https://repobeats.axiom.co/api/embed/6e052532434e86c4c747d06ce3edd82f365646ab.svg" alt="Repobeats analytics image">
</div>


---

# 介绍

小孩子不懂事写着玩的，里面基本上是我写的医学笔记，通过 [Docusaurus](https://docusaurus.io/) 搭建。

对主分支的修改会被 CI 流程推送修改，若您需要进行修改，请 fork dev 分支，并 PR dev 分支。

此外，该笔记本的内容通过 Vercel 部署，请点击 [这里](https://medi.emu.ac.cn/) 查看。

## 文件结构

```
+-- blog
+-- docs   <- 笔记请修改这里
+-- node_modules
+-- src
+-- static
|   .gitignore
|   babel.config.js
|   docusaurus.config.ts
|   package-lock.json
|   package.json
|   README.md
|   sidebars.ts
|   tree.ps1
|   tsconfig.json
```

## 使用方法

安装最新最热的 `node.js`，并且更新你的 `npm`。

获取本项目。

```bash
git clone git@github.com:chitsanfei/monster-medical-learning-book.git
```

启动本项目。

```bash
cd monster-medical-learning-book
npm install
npm start
```

编译。
```bash
npm build
```

## 许可证

`monster-medical-learning-book` 采用 `MIT` 许可证进行开源

```text
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## 相关网站
- https://medi.emu.ac.cn/
- https://docusaurus.io/
---
sidebar_position: 1
---

# Intro

This project, initiated by @chitsanfei, aims to make medical knowledge more openly accessible. In essence, it serves as a personal notebook.

You must agree that this project, as a professional knowledge base, cannot replace consultations with a professional doctor and is only suitable for quick reference and memorization of key points by medical students. The author and all other open-source contributors bear no responsibility for any consequences resulting from violations of this rule.

## Local Deployment

In certain circumstances, you may not be able to access these notes online. Therefore, you can attempt to deploy them locally.

### Environment

- [Node.js](https://nodejs.org/en/download/) version 18.0 or higher;
- NPM version 10.8.0 or higher;
- Git.

### Obtaining Notebook Content

Retrieve the files for our notebook from [GitHub](https://github.com/chitsanfei/monster-medical-learning-book).

```bash 
git clone https://github.com/chitsanfei/monster-medical-learning-book.git
```

Please note that if you need to modify the notes, you should clone using SSH, as GitHub has largely disabled HTTPS pushes.

### Running the Notebook Files

```bash
bash 
cd monster-medical-learning-book
npm run start
```

The `cd` command changes your current working directory. To run the Monster Book, you need to navigate to this directory in your terminal.

The `npm run start` command builds the Monster Book locally and serves it through a development server. You can view it at http://localhost:3000/.

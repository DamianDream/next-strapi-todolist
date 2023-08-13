# Project name "N.S.T."
Next.js, Strapai(CMS), Tailwind
--
Note: This project was started with passion to code. I was new to Next 13, Tailwind and Strapi(CMS). 
If you find any bugs or improvements feel free to create an issue.

![demo_screenshot.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot.jpg)
Created by Batalshikov Dima via exchange coffee to code

## Getting Started

1. Get the repository :

```bash
  git clone #...
```

2. Run `setup` command to setup frontend and backend:
   Script will run installation of "yarn" & all required dependencies:
```bash
  yarn setup
  
      "setup": "yarn install && yarn setup:frontend && yarn setup:backend",
```

3. Run `setup` command to setup frontend and backend: <br>
   Script will run both frontend and backend
```bash
  yarn dev
  
      "dev": "yarn clear && concurrently \"cd frontend && yarn dev:turbo\" \"cd backend && yarn develop\""
```

4. For Strapi I create admin profile<br>
    Fill free to use already predefined User profile:<br>
   - #### login: mail@gmail.com<br>
   - #### password: Password1<br>
```bash
  http://localhost:1337/admin/
```
![alt](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_login.jpg)
For the demo, system is preconfigured and do not need any config form the "Strapi" admin panel.
You can find more info and documentation about this wonderful CMS via link https://docs.strapi.io/dev-docs/quick-start
---
![demo_screenshot_content.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_content.jpg)
5. After Yarn finish installation and setup you can find my project via link below: <br>
   http://localhost:3000/
![demo_screenshot_app.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_app.jpg)
! Please note: app build with "Turbopack" instead "Webpack"
Personally I find it very fast.
https://nextjs.org/docs/architecture/turbopack

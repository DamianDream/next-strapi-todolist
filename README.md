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
  git clone https://github.com/DamianDream/next-strapi-todolist.git
```

2. In the root folder, using terminal `setup`:
   Script will run installation "yarn" & all required dependencies:
```bash
  yarn setup
```

3. In the `BACKEND` folder, in its root create `.env` file and add data that I provide below.
```dotenv
HOST=0.0.0.0
PORT=1337
APP_KEYS=L8f4OVlKNoUwzRnGePNkaw==,xbkGOba+RePVnbX0Qw60Jw==,lTY0retbtyq5VSnJBpBtwg==,N8OwBn80m6IjwiHz7BdFUA==
API_TOKEN_SALT=THRpMYWIM3GwbJVdFLohfg==
ADMIN_JWT_SECRET=T7cuTedrDqiYmJylzlsv6A==
TRANSFER_TOKEN_SALT=Sal8Wrog5O49EdI+Htekow==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=SXg6himY0jC/4nMNfG1JJg==
```
---
File location you can find on screenshot below.
![demo_screenshot_env.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_env.jpg)

4. In the `BACKEND` folder run `develop` script to start Strapi CMS: <br>
```bash
  yarn develop
```

5. For start using Strapi you should create admin profile<br>
   - #### login: mail@gmail.com<br>
   - #### password: Password1<br>
```bash
  http://localhost:1337/admin/
```
6. Create profile
![strapi_step_1.jpg](frontend%2Fpublic%2Fassets%2Fstrapi_step_1.jpg)
<br>
<br>
7. Follow the green arrow and do next: <br>
    - open `Settings` <br>
    - open `Roles` for users and choose `Public` <br>
    - find our demo database (collection) `Strapitodo` and mask all `Select all` <br>
    - Save <br><br>
![strapi_step_2jpg.jpg](frontend%2Fpublic%2Fassets%2Fstrapi_step_2jpg.jpg)
<br>
<br>
8. Check the existing predefined collection `strapitodo`
You can find more info and documentation about this wonderful CMS via link https://docs.strapi.io/dev-docs/quick-start
<br>
<br>
![demo_screenshot_content.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_content.jpg)
<br>
<br>
9. After configuration "Strapi" In the `PROJECT ROOT folder` run `dev` script to start frontend and backend: <br>
```bash
  yarn dev  
```

10. You ready to go and try my Next Todo List App <br>
   http://localhost:3000/
![demo_screenshot_app.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_app.jpg)
! Please note: app build with "Turbopack" instead "Webpack"
Personally I find it very fast. Yoy can change it in the package.json (frontend), just remove `--turbo` inline `dev` script <br>
<br>
If you have any question please feel free to ask or create issue in GitHub repo 😎
